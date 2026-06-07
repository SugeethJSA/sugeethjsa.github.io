import React from "react";
import Link from "next/link";

interface TocEntry {
  level: number;
  text: string;
  id: string;
}

export function extractToc(markdown: string): TocEntry[] {
  const headings: TocEntry[] = [];
  const lines = markdown.split("\n");
  
  let inCodeBlock = false;
  
  for (const line of lines) {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    if (inCodeBlock) continue;
    
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/\[(.*?)\]\(.*?\)/g, '$1').replace(/[*`_]/g, ''); // simple strip markdown
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ level, text, id });
    }
  }
  
  return headings;
}

export function TableOfContents({ markdown }: { markdown: string }) {
  const toc = extractToc(markdown);
  
  if (toc.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="font-semibold text-sm">On this page</p>
      <ul className="m-0 list-none space-y-1 p-0">
        {toc.map((item, i) => (
          <li
            key={i}
            className={`text-sm ${item.level === 3 ? "ml-4" : ""}`}
          >
            <Link
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground transition-colors line-clamp-1"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
