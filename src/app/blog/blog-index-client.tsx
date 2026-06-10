"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { Clock, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/blog";

export function BlogIndexClient({
  posts,
  allTags,
}: {
  posts: BlogPost[];
  allTags: string[];
}) {
  const [selectedTag, setSelectedTag] = useState("all");

  const filtered = selectedTag === "all"
    ? posts
    : posts.filter((p) => p.tags.includes(selectedTag));

  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">Thoughts, reviews, and experiences.</p>
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

      <div className="grid gap-6">
        {filtered.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors border-border/40 bg-background/60 backdrop-blur-md overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {post.image && (
                    <div className="sm:w-40 sm:min-w-[10rem] h-32 sm:h-auto relative overflow-hidden">
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent sm:bg-gradient-to-l" />
                    </div>
                  )}
                  <CardHeader className={post.image ? "sm:pl-6" : ""}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <time className="text-sm text-muted-foreground whitespace-nowrap">
                        {format(parseISO(post.date), "MMMM d, yyyy")}
                      </time>
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <CardDescription className="text-base mt-1">{post.description}</CardDescription>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime}</span>
                    </div>
                  </CardHeader>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <Filter className="w-8 h-8 mx-auto mb-4" />
          <p>No posts found for this tag.</p>
          <Button variant="outline" size="sm" className="mt-4" onClick={() => setSelectedTag("all")}>
            Clear filter
          </Button>
        </div>
      )}
    </div>
  );
}
