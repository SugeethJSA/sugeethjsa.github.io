import { getStories } from "@/lib/stories";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";

export default function StoriesIndex() {
  const stories = getStories();

  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Stories</h1>
        <p className="text-xl text-muted-foreground">Personal anecdotes, experiences, and rants.</p>
      </div>

      <div className="grid gap-6">
        {stories.map((story) => (
          <Link key={story.slug} href={`/stories/${story.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors border-border/40 bg-background/60 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{story.title}</CardTitle>
                  <time className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {format(parseISO(story.date), "MMMM d, yyyy")}
                  </time>
                </div>
                <CardDescription className="text-base">{story.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
