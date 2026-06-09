import { getBlogPosts } from "@/lib/blog";
import { getStories } from "@/lib/stories";
import { getDocs } from "@/lib/docs";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sugeethjsa.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/stories`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${baseUrl}/docs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const stories = getStories().map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(story.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const docs = getDocs().map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
    lastModified: new Date(doc.date),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...staticPages, ...blogPosts, ...stories, ...docs];
}
