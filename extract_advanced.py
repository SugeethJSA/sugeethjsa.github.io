import zipfile
import xml.etree.ElementTree as ET
import os
import shutil
import re

def get_docx_content(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    rels_content = document.read('word/_rels/document.xml.rels')
    
    # Parse relationships to map rId to image path
    rels_tree = ET.XML(rels_content)
    RELS_NS = '{http://schemas.openxmlformats.org/package/2006/relationships}'
    rels = {}
    for rel in rels_tree.findall(f'{RELS_NS}Relationship'):
        rels[rel.get('Id')] = rel.get('Target') # Target looks like 'media/image1.png'
        
    tree = ET.XML(xml_content)
    
    WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    DRAWING_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}drawing'
    PIC_NAMESPACE = '{http://schemas.openxmlformats.org/drawingml/2006/picture}'
    A_NAMESPACE = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
    
    PARA = WORD_NAMESPACE + 'p'
    TEXT = WORD_NAMESPACE + 't'
    DRAWING = WORD_NAMESPACE + 'drawing'
    
    # Extract images to public/images/
    os.makedirs('public/images', exist_ok=True)
    for name in document.namelist():
        if name.startswith('word/media/'):
            filename = os.path.basename(name)
            if filename:
                source = document.open(name)
                with open(os.path.join('public/images', filename), 'wb') as target:
                    shutil.copyfileobj(source, target)
    
    paragraphs = []
    
    # We iterate over all paragraphs
    for paragraph in tree.iter(PARA):
        para_content = ""
        # We need to iterate over all children to maintain order of text and images
        for child in paragraph.iter():
            if child.tag == TEXT and child.text:
                para_content += child.text
            elif 'drawing' in child.tag:
                # Find blip
                for blip in child.iter(f'{A_NAMESPACE}blip'):
                    embed_id = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                    if embed_id and embed_id in rels:
                        img_target = rels[embed_id]
                        img_filename = os.path.basename(img_target)
                        para_content += f'\n\n![{img_filename}](/images/{img_filename})\n\n'
        
        if para_content.strip() or '![image' in para_content:
            paragraphs.append(para_content.strip())
            
    document.close()
    return '\n\n'.join(paragraphs)

try:
    text = get_docx_content('Sugeeth Jayaraj Samala Augustine.docx')
    with open('extracted_text_with_images.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Advanced extraction successful.")
    
    # Slicing Logic
    def write_md(path, title, date, description, body):
        frontmatter = f"---\ntitle: \"{title}\"\ndate: \"{date}\"\ndescription: \"{description}\"\n---\n\n"
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(frontmatter + body.strip() + "\n")

    content = text
    
    # 1. AmazeCC
    amaze_match = re.search(r'(AmazeCC\n\nHello guys,.*?)(?:\n\nMy Experience @ Dakshina Chitra|\n\nMy Experience @ Dakshina Chitra)', content, re.DOTALL)
    if amaze_match:
        body = amaze_match.group(1).strip()
        write_md("src/content/blog/amaze-cc.md", "AmazeCC: My Journey with UniCC", "2026-06-02", "How I forked UniCC and built a comprehensive VTU companion app.", body)
    
    # 2. My Experience @ Dakshina Chitra
    dak_match = re.search(r'(My Experience @ Dakshina Chitra\n\nA personal outlook.*?)VIT Chennai: An experience to behold', content, re.DOTALL)
    if dak_match:
        body = dak_match.group(1).replace("My Experience @ Dakshina Chitra\n\nA personal outlook on a global phenomenon\nBy Sugeeth Jayaraj S A\nMarch 09, 2026\n12:37 PM", "").strip()
        write_md("src/content/stories/my-experience-dakshina-chitra.md", "My Experience @ Dakshina Chitra", "2026-03-09", "A personal outlook and rant on a global phenomenon.", body)

    # 3. VIT Chennai
    vit_match = re.search(r'(VIT Chennai: An experience to behold\n\nBy Sugeeth Jayaraj S A.*?)© Sugeeth Jayaraj S A', content, re.DOTALL)
    if vit_match:
        body = vit_match.group(1).replace("VIT Chennai: An experience to behold\n\nBy Sugeeth Jayaraj S A", "").strip()
        write_md("src/content/stories/vit-chennai.md", "VIT Chennai: An experience to behold", "2026-02-01", "My journey from JEE trauma to finding my place at VIT Chennai.", body)

    # 4. Naming Scheme
    ns_match = re.search(r'(Naming Scheme\n\nNaming Scheme is a part of my shortcut.*?)(?:Version 1\n\nInitial release)', content, re.DOTALL)
    if ns_match:
        body = ns_match.group(1).replace("Naming Scheme\n\n", "").strip()
        write_md("src/content/docs/naming-scheme.md", "Naming Scheme", "2025-01-01", "Documentation for the custom naming scheme logic in Spring PDF Tools.", body)

    # 5. Spring PDF Tools
    spt_match = re.search(r'(Version 1\n\nInitial release of Spring PDF Tools.*?)📈 Version History', content, re.DOTALL)
    if spt_match:
        body = spt_match.group(1).strip()
        write_md("src/content/docs/spring-pdf-tools.md", "Spring PDF Tools", "2025-01-02", "Documentation and version history for the ultimate offline PDF manipulation shortcut.", body)

    # 6. About Content (Sugeeth @ Work)
    about_match = re.search(r'(Sugeeth @ Work\n\nHello, reader!.*?)Thank you for taking the time to read through this!', content, re.DOTALL)
    if about_match:
        with open("sugeeth_about.txt", "w", encoding="utf-8") as f:
            f.write(about_match.group(1).strip())
            
    print("Files sliced with images successfully.")

except Exception as e:
    print(f"Error: {e}")
