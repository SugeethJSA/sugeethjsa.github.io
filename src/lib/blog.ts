import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getReadingTime } from "./reading-time";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  readingTime: string;
  tags: string[];
  category: string;
  image?: string;
}

const cache = new Map<string, BlogPost[]>();

export function getBlogPosts(): BlogPost[] {
  if (cache.has("all")) return cache.get("all")!;

  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
      readingTime: getReadingTime(matterResult.content),
      tags: matterResult.data.tags ?? [],
      category: matterResult.data.category ?? "general",
      image: matterResult.data.image ?? undefined,
    };
  });

  const sorted = allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });

  cache.set("all", sorted);
  return sorted;
}

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    content: matterResult.content,
    readingTime: getReadingTime(matterResult.content),
    tags: matterResult.data.tags ?? [],
    category: matterResult.data.category ?? "general",
    image: matterResult.data.image ?? undefined,
  };
}

export function getCategories(): string[] {
  const posts = getBlogPosts();
  return Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));
}

export function getTags(): string[] {
  const posts = getBlogPosts();
  return Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
}
