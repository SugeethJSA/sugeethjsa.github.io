import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Mermaid } from "./mermaid";
import { Callout } from "./callout";
import { CardGrid, MDXCard } from "./cards";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";

const components: any = {
  cardgrid: CardGrid,
  card: MDXCard,
  blockquote: (props: any) => {
    const text = props.children?.[1]?.props?.children; // In react-markdown with raw, the structure is slightly different
    const rawText = String(text || props.children?.props?.children || props.children);
    
    if (typeof rawText === "string" && rawText.includes("[!")) {
      const typeMatch = rawText.match(/\[!(.*?)\]/);
      const typeStr = typeMatch ? typeMatch[1].toLowerCase() : "note";
      
      let calloutType = "default";
      if (typeStr === "warning") calloutType = "warning";
      if (typeStr === "caution" || typeStr === "danger") calloutType = "danger";
      if (typeStr === "important" || typeStr === "success") calloutType = "success";
      if (typeStr === "note") calloutType = "info";

      const remainingText = rawText.replace(/\[!(.*?)\]\s*/, "");
      
      return (
        <Callout type={calloutType as any} title={typeMatch?.[1]}>
          {remainingText}
        </Callout>
      );
    }
    return <blockquote {...props} />;
  },
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";
    const codeString = String(children).replace(/\n$/, "");

    if (language === "mermaid") {
      return <Mermaid chart={codeString} />;
    }

    if (!className) {
      return <code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>{children}</code>;
    }

    return (
      <div className="rounded-xl overflow-hidden border border-border/50 my-6 shadow-sm">
        <SyntaxHighlighter
          style={vscDarkPlus as any}
          language={language}
          PreTag="div"
          customStyle={{ margin: 0, padding: "1.5rem", background: "transparent" }}
          {...props}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  },
};

export function MDXContent({ source }: { source: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      components={components}
    >
      {source}
    </ReactMarkdown>
  );
}
