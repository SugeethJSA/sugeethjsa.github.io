"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "Inter, sans-serif",
});

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    if (ref.current) {
      mermaid.render("mermaid-svg-" + Math.random().toString(36).substr(2, 9), chart).then((result) => {
        setSvg(result.svg);
      });
    }
  }, [chart]);

  return (
    <div 
      ref={ref} 
      className="flex justify-center my-8 p-4 bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
