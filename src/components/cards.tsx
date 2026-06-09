import Link from "next/link";
import { cn } from "@/lib/utils";

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
      {children}
    </div>
  );
}

export function MDXCard({
  href,
  title,
  children,
  icon,
}: {
  href?: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const content = (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {icon && <div className="text-muted-foreground group-hover:text-foreground transition-colors">{icon}</div>}
        <h3 className="font-semibold tracking-tight text-lg text-foreground">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );

  const className = cn(
    "group flex flex-col justify-between rounded-xl border border-border/40 bg-background/60 p-6 shadow-sm transition-all hover:bg-muted/50 hover:shadow-md backdrop-blur-md h-full"
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
