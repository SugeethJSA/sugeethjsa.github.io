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
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyButton } from "./copy-button";

const Step = ({ children, title, step }: { children: React.ReactNode; title: string; step: number }) => (
  <div className="relative pl-10 py-4 border-l border-border/50 ml-6 mt-2 last:border-l-transparent">
    <div className="absolute -left-5 top-5 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-4 border-background">
      <span className="text-primary font-bold text-sm">{step}</span>
    </div>
    <h3 className="text-xl font-bold text-foreground mb-2 mt-0">{title}</h3>
    <div className="text-muted-foreground">{children}</div>
  </div>
);

const components: any = {
  cardgrid: CardGrid,
  card: MDXCard,
  tabs: Tabs,
  tabslist: TabsList,
  tabstrigger: TabsTrigger,
  tabscontent: TabsContent,
  step: Step,
  
  // Custom styled headings for a more lively Gitbook/Craft feel
  h1: ({ node, ...props }: any) => (
    <h1 className="text-4xl font-extrabold tracking-tight mt-10 mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent" {...props} />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className="text-3xl font-bold tracking-tight mt-12 mb-4 border-b border-border/50 pb-2 text-foreground" {...props} />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-4 text-foreground/90" {...props} />
  ),
  p: ({ node, ...props }: any) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground text-lg" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground text-lg" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground text-lg" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="leading-7" {...props} />
  ),
  a: ({ node, ...props }: any) => (
    <a className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" {...props} />
  ),
  img: ({ node, ...props }: any) => (
    <span className="flex flex-col items-center my-10">
      <img 
        className="rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 max-w-full h-auto hover:scale-[1.02]" 
        {...props} 
      />
      {props.alt && props.alt !== "Image" && (
        <span className="text-sm text-muted-foreground mt-3 italic">{props.alt}</span>
      )}
    </span>
  ),
  hr: ({ node, ...props }: any) => (
    <hr className="my-10 border-border/50" {...props} />
  ),
  
  blockquote: (props: any) => {
    const text = props.children?.[1]?.props?.children;
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
        <div className="my-6">
          <Callout type={calloutType as any} title={typeMatch?.[1]}>
            {remainingText}
          </Callout>
        </div>
      );
    }
    return (
      <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground bg-muted/30 py-3 pr-4 rounded-r-lg" {...props} />
    );
  },
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";
    const codeString = String(children).replace(/\n$/, "");

    if (language === "mermaid") {
      return <Mermaid chart={codeString} />;
    }

    if (!className) {
      return <code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono text-primary" {...props}>{children}</code>;
    }

    return (
      <div className="rounded-xl overflow-hidden border border-border/50 my-8 shadow-md group relative">
        <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b border-border/50">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs font-mono text-muted-foreground lowercase">{language}</div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={codeString} />
          </div>
        </div>
        <SyntaxHighlighter
          style={vscDarkPlus as any}
          language={language}
          PreTag="div"
          customStyle={{ margin: 0, padding: "1.5rem", background: "rgba(0,0,0,0.3)" }}
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
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
