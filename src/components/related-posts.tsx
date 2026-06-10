import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { format, parseISO } from "date-fns";

interface RelatedItem {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function RelatedPosts({ items, basePath, label }: { items: RelatedItem[]; basePath: string; label: string }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Related {label}</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/${basePath}/${item.slug}`}
            className="group block p-4 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2 mb-2">
              {item.title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <time>{format(parseISO(item.date), "MMM d, yyyy")}</time>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.readingTime}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {item.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-primary font-medium mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Read <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
