import { getStories } from "@/lib/stories";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { Clock, BookOpen } from "lucide-react";

export default function StoriesIndex() {
  const stories = getStories();

  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Stories</h1>
        <p className="text-xl text-muted-foreground">Personal anecdotes, experiences, and rants.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((story) => (
          <Link key={story.slug} href={`/stories/${story.slug}`}>
            <Card className="h-full hover:bg-muted/50 transition-colors border-border/40 bg-background/60 backdrop-blur-md group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <time className="text-xs text-muted-foreground">
                    {format(parseISO(story.date), "MMMM d, yyyy")}
                  </time>
                </div>
                <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                <CardDescription className="text-sm">{story.description}</CardDescription>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                  <Clock className="w-3 h-3" />
                  <span>{story.readingTime}</span>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
