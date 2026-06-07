import fs from "fs";
import path from "path";
import matter from "gray-matter";

const storiesDirectory = path.join(process.cwd(), "src/content/stories");

export interface StoryPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getStories(): StoryPost[] {
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
    };
  });

  return allStoriesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getStory(slug: string): StoryPost | null {
  const fullPath = path.join(storiesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    content: matterResult.content,
  };
}
