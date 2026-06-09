import { getStory, getStories } from "@/lib/stories";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
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

  return (
    <div className="container max-w-3xl py-12 mx-auto px-4">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/stories" className="hover:text-foreground transition-colors">Stories</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground truncate max-w-[200px]">{story.title}</span>
      </nav>
      
      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
        <div className="mb-12 not-prose">
          <Link href="/stories" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to stories
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 mt-4">{story.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time>{format(parseISO(story.date), "MMMM d, yyyy")}</time>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{story.readingTime}</span>
            </span>
          </div>
        </div>
        
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {story.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
