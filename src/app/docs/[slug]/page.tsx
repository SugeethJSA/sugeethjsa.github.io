import { getDoc, getDocs } from "@/lib/docs";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";
import { TableOfContents } from "@/components/toc";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
  const docs = getDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDoc(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12 relative">
      <article className="flex-1 min-w-0 prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:scroll-m-24 prose-a:text-primary hover:prose-a:text-primary/80 pb-24">
        <div className="mb-12 not-prose">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{doc.title}</h1>
          <time className="text-muted-foreground text-sm">
            Last updated: {format(parseISO(doc.date), "MMMM d, yyyy")}
          </time>
        </div>
        
        <MDXContent source={doc.content} />
      </article>

      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <TableOfContents markdown={doc.content} />
        </div>
      </aside>
    </div>
  );
}
