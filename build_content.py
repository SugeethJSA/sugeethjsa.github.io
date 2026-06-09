import os
import re

with open("extracted_text.txt", "r", encoding="utf-8") as f:
    content = f.read()

def write_md(path, title, date, description, body):
    frontmatter = f"""---
title: "{title}"
date: "{date}"
description: "{description}"
---

"""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(frontmatter + body.strip() + "\n")

# 1. AmazeCC
amaze_match = re.search(r'(AmazeCC\n\nHello guys,.*?)(?:\n\n\[Image\])', content, re.DOTALL)
if amaze_match:
    write_md("src/content/blog/amaze-cc.md", "AmazeCC: My Journey with UniCC", "2026-06-02", "How I forked UniCC and built a comprehensive VTU companion app.", amaze_match.group(1))

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

print("Extraction script completed.")
