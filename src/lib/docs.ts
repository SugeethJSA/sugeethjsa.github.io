import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "src/content/docs");

export interface DocPage {
  slug: string;
  title: string;
  date: string;
  description: string;
  projectSlug: string;
  segments: string[];
  content: string;
}

export interface DocProject {
  slug: string;
  title: string;
  description: string;
  date: string;
  pages: DocPage[];
}

function readMarkdown(filePath: string): { slug: string; data: any; content: string } | null {
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const relative = path.relative(docsDirectory, filePath);
  const slug = relative
    .replace(/\.md$/, "")
    .replace(/\\/g, "/")
    .replace(/\/index$/, "");
  return { slug, data: matterResult.data, content: matterResult.content };
}

export function getAllPages(): DocPage[] {
  if (!fs.existsSync(docsDirectory)) return [];

  const pages: DocPage[] = [];
  const entries = fs.readdirSync(docsDirectory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(docsDirectory, entry.name);

    if (entry.isDirectory()) {
      const subEntries = fs.readdirSync(fullPath, { withFileTypes: true });
      for (const sub of subEntries) {
        if (!sub.name.endsWith(".md")) continue;
        const filePath = path.join(fullPath, sub.name);
        const result = readMarkdown(filePath);
        if (result) {
          pages.push({
            slug: result.slug,
            title: result.data.title,
            date: result.data.date,
            description: result.data.description,
            projectSlug: entry.name,
            segments: result.slug.split("/"),
            content: result.content,
          });
        }
      }
    } else if (entry.name.endsWith(".md")) {
      const result = readMarkdown(fullPath);
      if (result) {
        pages.push({
          slug: result.slug,
          title: result.data.title,
          date: result.data.date,
          description: result.data.description,
          projectSlug: result.slug,
          segments: [result.slug],
          content: result.content,
        });
      }
    }
  }

  return pages.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getDoc(slug: string): DocPage | null {
  // Try exact match first (e.g., "spring-pdf-tools/naming-scheme")
  const exactPath = path.join(docsDirectory, `${slug}.md`);
  const result = readMarkdown(exactPath);
  if (result) {
    return {
      slug: result.slug,
      title: result.data.title,
      date: result.data.date,
      description: result.data.description,
      projectSlug: result.slug.includes("/") ? result.slug.split("/")[0] : result.slug,
      segments: result.slug.split("/"),
      content: result.content,
    };
  }

  // Try index.md inside a directory (e.g., "spring-lock" → "spring-lock/index.md")
  const indexPath = path.join(docsDirectory, slug, "index.md");
  const indexResult = readMarkdown(indexPath);
  if (indexResult) {
    return {
      slug: indexResult.slug.replace(/\/index$/, ""),
      title: indexResult.data.title,
      date: indexResult.data.date,
      description: indexResult.data.description,
      projectSlug: slug,
      segments: slug.split("/"),
      content: indexResult.content,
    };
  }

  return null;
}

export function getProject(projectSlug: string): DocProject | null {
  const allPages = getAllPages();
  const pages = allPages.filter((p) => p.projectSlug === projectSlug);

  if (pages.length === 0) return null;

  const main = pages.find((p) => p.segments.length === 1) || pages[0];

  return {
    slug: projectSlug,
    title: main.title,
    description: main.description,
    date: main.date,
    pages: pages.sort((a, b) => {
      const aOrder = a.segments.length > 1 ? (a as any).pageOrder ?? 99 : -1;
      const bOrder = b.segments.length > 1 ? (b as any).pageOrder ?? 99 : -1;
      return aOrder - bOrder;
    }),
  };
}

// Legacy: flat list of all docs, for sitemap and backward compat
export function getDocs(): { slug: string; title: string; date: string; description: string }[] {
  return getAllPages().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    description: p.description,
  }));
}

export function getAllProjects(): DocProject[] {
  const allPages = getAllPages();
  const projectMap = new Map<string, DocPage[]>();

  for (const page of allPages) {
    if (!projectMap.has(page.projectSlug)) {
      projectMap.set(page.projectSlug, []);
    }
    projectMap.get(page.projectSlug)!.push(page);
  }

  const projects: DocProject[] = [];

  projectMap.forEach((pages, slug) => {
    const main = pages.find((p) => p.segments.length === 1) || pages[0];
    projects.push({
      slug,
      title: main.title,
      description: main.description,
      date: main.date,
      pages: pages.sort((a, b) => {
        const aOrder = a.segments.length > 1 ? (a as any).pageOrder ?? 99 : -1;
        const bOrder = b.segments.length > 1 ? (b as any).pageOrder ?? 99 : -1;
        return aOrder - bOrder;
      }),
    });
  });

  return projects.sort((a, b) => {
    const aOrder = (a.pages[0] as any).projectOrder ?? 99;
    const bOrder = (b.pages[0] as any).projectOrder ?? 99;
    return aOrder - bOrder;
  });
}
