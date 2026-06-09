"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search as SearchIcon, X, FileText, BookOpen } from "lucide-react";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "blog" | "story";
}

export function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [index, setIndex] = useState<SearchResult[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: SearchResult[]) => setIndex(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (query.length < 2 || !index) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    setResults(
      index.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      ).slice(0, 10)
    );
  }, [query, index]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors"
      >
        <SearchIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex text-xs bg-muted px-1.5 py-0.5 rounded ml-2">Ctrl+K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-xl mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <SearchIcon className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, stories, docs..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {!index && query.length >= 2 && (
                <div className="p-4 text-center text-sm text-muted-foreground">Loading index...</div>
              )}
              {index && results.length === 0 && query.length >= 2 && (
                <div className="p-4 text-center text-sm text-muted-foreground">No results found.</div>
              )}
              {results.map((result, i) => (
                <Link
                  key={`${result.href}-${i}`}
                  href={result.href}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0"
                >
                  {result.type === "blog" ? (
                    <FileText className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0">
                    <div className="font-medium truncate">{result.title}</div>
                    <div className="text-sm text-muted-foreground truncate">{result.description}</div>
                    <div className="text-xs text-muted-foreground/60 mt-0.5 capitalize">{result.type}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
