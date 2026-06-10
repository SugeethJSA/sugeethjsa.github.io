import { getStory, getStories } from "@/lib/stories";
import { getRelatedStories } from "@/lib/related";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TableOfContents } from "@/components/toc";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorBio } from "@/components/author-bio";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const stories = getStories();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const story = getStory(resolvedParams.slug);
  if (!story) return {};
  return {
    title: `${story.title} | Stories`,
    description: story.description,
    openGraph: { title: story.title, description: story.description },
  };
}

export default async function StoryPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const story = getStory(resolvedParams.slug);

  if (!story) {
    notFound();
  }

  const related = getRelatedStories(story.slug);

  return (
    <div className="container max-w-[1200px] py-12 mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-3xl mx-auto w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/content" className="hover:text-foreground transition-colors">Content</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/stories" className="hover:text-foreground transition-colors">Stories</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground truncate max-w-[200px]">{story.title}</span>
          </nav>

          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:scroll-m-24 prose-a:text-primary hover:prose-a:text-primary/80">
            <div className="mb-12 not-prose">
              <Link href="/stories" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to stories
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 mt-4">{story.title}</h1>
              <div className="flex items-center gap-3 text-muted-foreground flex-wrap">
                <time>{format(parseISO(story.date), "MMMM d, yyyy")}</time>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{story.readingTime}</span>
                </span>
              </div>
              {story.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              )}
            </div>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {story.content}
            </ReactMarkdown>
          </article>

          <AuthorBio />
          <RelatedPosts items={related} basePath="stories" label="Stories" />
        </main>

        {/* Right sidebar: TOC */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <div className="sticky top-24">
            <div className="glassmorphism rounded-xl p-4">
              <TableOfContents markdown={story.content} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
