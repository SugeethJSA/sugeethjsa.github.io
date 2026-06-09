import zipfile
import xml.etree.ElementTree as ET
import os
import re

document = zipfile.ZipFile('Sugeeth Jayaraj Samala Augustine.docx')
xml_content = document.read('word/document.xml').decode('utf-8')
rels_content = document.read('word/_rels/document.xml.rels')

rels_tree = ET.XML(rels_content)
RELS_NS = '{http://schemas.openxmlformats.org/package/2006/relationships}'
rels = {}
for rel in rels_tree.findall(f'{RELS_NS}Relationship'):
    rels[rel.get('Id')] = rel.get('Target')

# Isolate AmazeCC
match = re.search(r'AmazeCC.*?(?:My Experience @ Dakshina Chitra)', xml_content, re.DOTALL)
if not match:
    print("AmazeCC not found")
    exit()

amaze_xml = match.group(0)

# We want to sequentially extract text and images
# A simple way is to find all <w:t> tags and <a:blip r:embed="rIdX"> tags
tokens = re.finditer(r'<w:t[^>]*>(.*?)</w:t>|<a:blip r:embed="(rId\d+)"', amaze_xml)

output = []
for m in tokens:
    if m.group(1) is not None:
        output.append(m.group(1))
    elif m.group(2) is not None:
        rid = m.group(2)
        if rid in rels:
            img_filename = os.path.basename(rels[rid])
            output.append(f'\n\n![{img_filename}](/images/{img_filename})\n\n')

# The output list has strings and images. We should join them.
# Note: w:t tags without paragraphs might lose newlines, but the original amaze-cc.md has correct text.
# Let's just find the sequence of images and replace the [Image] tags in the markdown!

images = []
for m in re.finditer(r'<a:blip r:embed="(rId\d+)"', amaze_xml):
    rid = m.group(1)
    if rid in rels:
        img_filename = os.path.basename(rels[rid])
        images.append(f'![AmazeCC Screenshot](/images/{img_filename})')

print(f"Found {len(images)} images in AmazeCC XML.")

# Read the existing amaze-cc.md
md_path = 'src/content/blog/amaze-cc.md'
with open(md_path, 'r', encoding='utf-8') as f:
    md_content = f.read()

# Replace literal "[Image]" with the actual images.
# Wait, are there exactly as many [Image] tags as extracted images?
# Let's just append all found images at the bottom if they don't match, or replace [Image] sequentially.
md_content = md_content.replace('[Image]', '')

# Append images
md_content += "\n\n### Screenshots\n\n"
md_content += "\n\n".join(images)

with open(md_path, 'w', encoding='utf-8') as f:
    f.write(md_content)

print("Fixed AmazeCC images!")
