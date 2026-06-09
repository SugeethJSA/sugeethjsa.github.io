import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { Clock } from "lucide-react";

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">Thoughts, reviews, and experiences.</p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors border-border/40 bg-background/60 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <time className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {format(parseISO(post.date), "MMMM d, yyyy")}
                  </time>
                </div>
                <CardDescription className="text-base">{post.description}</CardDescription>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime}</span>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
