import { getDoc, getDocs } from "@/lib/docs";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";
import { TableOfContents } from "@/components/toc";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const docs = getDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = getDoc(resolvedParams.slug);
  if (!doc) return {};
  return {
    title: `${doc.title} | Docs`,
    description: doc.description,
    openGraph: { title: doc.title, description: doc.description },
  };
}

export default async function DocPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doc = getDoc(resolvedParams.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="container max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 relative">
        {/* Left Sidebar: Project Context */}
        <aside className="w-full lg:w-64 flex-shrink-0 order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="sticky top-24 glassmorphism rounded-xl p-6">
            <Link href="/docs" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all docs
            </Link>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Project Info
                </h3>
                <p className="font-semibold text-foreground text-lg leading-tight mb-2">{doc.title}</p>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Last updated</span>
                </div>
                <p className="text-sm font-medium text-foreground pl-6">
                  {format(parseISO(doc.date), "MMMM d, yyyy")}
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Center Content Area */}
        <main className="flex-1 min-w-0 order-1 lg:order-2 px-0 lg:px-8 max-w-3xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:scroll-m-24 prose-a:text-primary hover:prose-a:text-primary/80 pb-24">
            <div className="mb-12 not-prose border-b border-border pb-8">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-emerald-500">
                {doc.title}
              </h1>
              <p className="text-xl text-muted-foreground">{doc.description}</p>
            </div>
            
            <MDXContent source={doc.content} />
          </article>
        </main>

        {/* Right Sidebar: Table of Contents */}
        <aside className="hidden xl:block w-64 flex-shrink-0 order-3">
          <div className="sticky top-24">
            <TableOfContents markdown={doc.content} />
          </div>
        </aside>
      </div>
    </div>
  );
}
