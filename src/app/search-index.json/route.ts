import { getBlogPosts } from "@/lib/blog";
import { getStories } from "@/lib/stories";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts();
  const stories = getStories();

  const items = [
    ...posts.map((p) => ({
      title: p.title,
      description: p.description,
      content: p.content.slice(0, 500),
      href: `/blog/${p.slug}`,
      type: "blog" as const,
    })),
    ...stories.map((s) => ({
      title: s.title,
      description: s.description,
      content: s.content.slice(0, 500),
      href: `/stories/${s.slug}`,
      type: "story" as const,
    })),
  ];

  return Response.json(items);
}
