"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DocsSidebar({ docs }: { docs: { slug: string; title: string }[] }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 bg-background/60 backdrop-blur-md rounded-xl border border-border/40 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 px-2">
        All Docs
      </h3>
      <ul className="space-y-1">
        <li>
          <Link
            href="/docs"
            className={cn(
              "block px-2 py-2 text-sm rounded-lg transition-colors hover:bg-muted/50",
              pathname === "/docs" ? "text-primary font-medium bg-muted/30" : "text-muted-foreground"
            )}
          >
            Overview
          </Link>
        </li>
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link
              href={`/docs/${doc.slug}`}
              className={cn(
                "block px-2 py-2 text-sm rounded-lg transition-colors hover:bg-muted/50",
                pathname === `/docs/${doc.slug}` ? "text-primary font-medium bg-muted/30" : "text-muted-foreground"
              )}
            >
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
