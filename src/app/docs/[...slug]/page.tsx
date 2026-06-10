import { getDoc, getProject, getAllProjects } from "@/lib/docs";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";
import { TableOfContents } from "@/components/toc";
import { Feedback } from "@/components/feedback";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ChevronRight, FileText, FolderOpen, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const projects = getAllProjects();
  const params: { slug: string[] }[] = [];

  for (const project of projects) {
    for (const page of project.pages) {
      params.push({ slug: page.segments });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");
  const doc = getDoc(slug);
  if (!doc) return {};
  return {
    title: `${doc.title} | Docs`,
    description: doc.description,
    openGraph: { title: doc.title, description: doc.description },
  };
}

export default async function DocPost({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");
  const doc = getDoc(slug);

  if (!doc) {
    notFound();
  }

  const project = getProject(doc.projectSlug);

  return (
    <div className="container max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar: Project Context + Subpages */}
        <aside className="w-full lg:w-64 flex-shrink-0 order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="sticky top-24 space-y-6">
            <Link
              href="/docs"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All docs
            </Link>

            {project ? (
              <nav className="glassmorphism rounded-xl p-5 space-y-5">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center">
                    <FolderOpen className="w-4 h-4 mr-1.5" />
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground/60 mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {format(parseISO(project.date), "MMM d, yyyy")}
                  </div>
                </div>

                <div className="border-t border-border/30 pt-3">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-1 px-3">
                    Pages
                  </h4>
                  <ul className="space-y-0.5">
                    {project.pages.map((page) => {
                      const pageSlug = page.slug;
                      const isActive = pageSlug === doc.slug;
                      return (
                        <li key={page.slug}>
                          <Link
                            href={`/docs/${pageSlug}`}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground/80 hover:text-foreground hover:bg-muted/40"
                            )}
                          >
                            <FileText className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{page.title}</span>
                            {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto flex-shrink-0" />}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            ) : (
              <div className="glassmorphism rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  {doc.title}
                </h3>
                <p className="text-xs text-muted-foreground/70">{doc.description}</p>
                <div className="flex items-center text-xs text-muted-foreground/60">
                  <Clock className="w-3 h-3 mr-1" />
                  {format(parseISO(doc.date), "MMM d, yyyy")}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Center Content Area */}
        <main className="flex-1 min-w-0 order-1 lg:order-2 max-w-3xl mx-auto w-full">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:scroll-m-24 prose-a:text-primary hover:prose-a:text-primary/80 pb-24">
            <div className="mb-10 not-prose border-b border-border/50 pb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                {project ? (
                  <>
                    <Link href={`/docs/${project.slug}`} className="hover:text-primary transition-colors font-medium">
                      {project.title}
                    </Link>
                    {doc.segments.length > 1 && (
                      <>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-foreground">{doc.title}</span>
                      </>
                    )}
                  </>
                ) : doc.slug !== "quick-start-guide" && (
                  <span className="text-foreground">{doc.title}</span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-emerald-500">
                {doc.title}
              </h1>
              <p className="text-base text-muted-foreground mt-2">{doc.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Last updated: {format(parseISO(doc.date), "MMMM d, yyyy")}
                </span>
              </div>
            </div>

            <MDXContent source={doc.content} />
            <Feedback />
          </article>
        </main>

        {/* Right Sidebar: Table of Contents */}
        <aside className="hidden xl:block w-56 flex-shrink-0 order-3">
          <div className="sticky top-24">
            <div className="glassmorphism rounded-xl p-4">
              <TableOfContents markdown={doc.content} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
