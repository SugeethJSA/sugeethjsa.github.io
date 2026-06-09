import { getStory, getStories } from "@/lib/stories";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      <Link href="/stories" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to stories
      </Link>
      
      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
        <div className="mb-12 not-prose">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{story.title}</h1>
          <time className="text-muted-foreground">
            {format(parseISO(story.date), "MMMM d, yyyy")}
          </time>
        </div>
        
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {story.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
