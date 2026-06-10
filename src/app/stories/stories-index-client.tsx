"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { Clock, BookOpen, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { StoryPost } from "@/lib/stories";

export function StoriesIndexClient({
  stories,
  allTags,
}: {
  stories: StoryPost[];
  allTags: string[];
}) {
  const [selectedTag, setSelectedTag] = useState("all");

  const filtered = selectedTag === "all"
    ? stories
    : stories.filter((s) => s.tags.includes(selectedTag));

  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Stories</h1>
        <p className="text-xl text-muted-foreground">Personal anecdotes, experiences, and rants.</p>
      </div>

      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedTag === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag("all")}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((story, i) => (
          <motion.div
            key={story.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link href={`/stories/${story.slug}`}>
              <Card className="h-full hover:bg-muted/50 transition-colors border-border/40 bg-background/60 backdrop-blur-md group overflow-hidden">
                {story.image && (
                  <div className="h-40 relative overflow-hidden">
                    <img
                      src={story.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <time className="text-xs text-muted-foreground">
                      {format(parseISO(story.date), "MMMM d, yyyy")}
                    </time>
                    {story.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                        {tag}
                      </Badge>
                    ))}
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
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <Filter className="w-8 h-8 mx-auto mb-4" />
          <p>No stories found for this tag.</p>
          <Button variant="outline" size="sm" className="mt-4" onClick={() => setSelectedTag("all")}>
            Clear filter
          </Button>
        </div>
      )}
    </div>
  );
}
