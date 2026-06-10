import { getBlogPosts } from "@/lib/blog";
import { getStories } from "@/lib/stories";
import { getAllProjects } from "@/lib/docs";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = "https://sugeethjsa.com";
  const posts = getBlogPosts();
  const stories = getStories();
  const projects = getAllProjects();
  const docPages = projects.flatMap((project) =>
    project.pages.map((page) => ({
      title: page.title,
      description: page.description,
      link: `${siteUrl}/docs/${page.slug}`,
      pubDate: new Date(page.date).toUTCString(),
    }))
  );

  const items = [
    ...posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: `${siteUrl}/blog/${post.slug}`,
      pubDate: new Date(post.date).toUTCString(),
    })),
    ...stories.map((story) => ({
      title: story.title,
      description: story.description,
      link: `${siteUrl}/stories/${story.slug}`,
      pubDate: new Date(story.date).toUTCString(),
    })),
    ...docPages,
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sugeeth Jayaraj</title>
    <description>Blog posts, stories, and thoughts from Sugeeth Jayaraj</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
