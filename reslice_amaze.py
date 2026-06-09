import re, os

def write_md(path, title, date, description, body):
    body = re.sub(r'(!\[.*?\]\(.*?\)\s+)+', lambda m: m.group(0).strip().split('\n')[0] + '\n\n', body)
    frontmatter = f"---\ntitle: \"{title}\"\ndate: \"{date}\"\ndescription: \"{description}\"\n---\n\n"
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(frontmatter + body.strip() + "\n")

with open('extracted_text_with_images.txt', 'r', encoding='utf-8') as f:
    content = f.read()

amaze_match = re.search(r'(AmazeCC\n\nHello guys,.*?)(?:\n\nMy Experience @ Dakshina Chitra|\n\nMy Experience @ Dakshina Chitra)', content, re.DOTALL)
if amaze_match:
    body = amaze_match.group(1).strip()
    write_md("src/content/blog/amaze-cc.md", "AmazeCC: My Journey with UniCC", "2026-06-02", "How I forked UniCC and built a comprehensive VTU companion app.", body)
    print("Resliced AmazeCC")

