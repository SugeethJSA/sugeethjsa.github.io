import { getBlogPosts, BlogPost } from "./blog";
import { getStories, StoryPost } from "./stories";

function score(a: string[], b: string[]): number {
  return a.filter((t) => b.includes(t)).length;
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const all = getBlogPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => ({ ...p, _score: score(p.tags, current.tags) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function getRelatedStories(slug: string, limit = 3): StoryPost[] {
  const all = getStories();
  const current = all.find((s) => s.slug === slug);
  if (!current) return [];
  return all
    .filter((s) => s.slug !== slug)
    .map((s) => ({ ...s, _score: score(s.tags, current.tags) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}
