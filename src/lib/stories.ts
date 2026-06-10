import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getReadingTime } from "./reading-time";

const storiesDirectory = path.join(process.cwd(), "src/content/stories");

export interface StoryPost {
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

const cache = new Map<string, StoryPost[]>();

export function getStories(): StoryPost[] {
  if (cache.has("all")) return cache.get("all")!;

  if (!fs.existsSync(storiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(storiesDirectory);
  const allStoriesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(storiesDirectory, fileName);
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
      category: matterResult.data.category ?? "personal",
      image: matterResult.data.image ?? undefined,
    };
  });

  const sorted = allStoriesData.sort((a, b) => (a.date < b.date ? 1 : -1));
  cache.set("all", sorted);
  return sorted;
}

export function getStory(slug: string): StoryPost | null {
  const fullPath = path.join(storiesDirectory, `${slug}.md`);
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
    category: matterResult.data.category ?? "personal",
    image: matterResult.data.image ?? undefined,
  };
}

export function getStoryCategories(): string[] {
  const stories = getStories();
  return Array.from(new Set(stories.map((s) => s.category).filter(Boolean)));
}

export function getStoryTags(): string[] {
  const stories = getStories();
  return Array.from(new Set(stories.flatMap((s) => s.tags))).sort();
}
