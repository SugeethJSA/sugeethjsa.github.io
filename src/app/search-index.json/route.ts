import { getBlogPosts } from "@/lib/blog";
import { getStories } from "@/lib/stories";
import { getAllProjects } from "@/lib/docs";

export const dynamic = "force-static";

export async function GET() {
  const posts = getBlogPosts();
  const stories = getStories();
  const projects = getAllProjects();
  const docPages = projects.flatMap((project) =>
    project.pages.map((page) => ({
      title: page.title,
      description: page.description,
      content: page.content.slice(0, 500),
      href: `/docs/${page.slug}`,
      type: "doc" as const,
    }))
  );

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
    ...docPages,
  ];

  return Response.json(items);
}
