import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { getStories } from "@/lib/stories";
import { getAllProjects } from "@/lib/docs";
import { FileText, BookOpen, BookMarked, Lightbulb, ArrowRight, Clock } from "lucide-react";
import { format, parseISO } from "date-fns";

const sections = [
  {
    title: "Blog",
    description: "Thoughts, reviews, and deep dives on tech and life.",
    href: "/blog",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    count: 0,
  },
  {
    title: "Stories",
    description: "Personal anecdotes, experiences, and rants.",
    href: "/stories",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
    count: 0,
  },
  {
    title: "Docs",
    description: "Comprehensive guides, references, and manuals for my projects.",
    href: "/docs",
    icon: BookMarked,
    color: "from-purple-500 to-pink-500",
    count: 0,
  },
  {
    title: "Tips",
    description: "Practical how-to guides, tips, and reference materials.",
    href: "/docs/tips",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    count: 0,
  },
];

export default function ContentHub() {
  const posts = getBlogPosts();
  const stories = getStories();
  const projects = getAllProjects();
  const tipsProject = projects.find((p) => p.slug === "tips");

  sections[0].count = posts.length;
  sections[1].count = stories.length;
  sections[2].count = projects.length;
  sections[3].count = tipsProject?.pages.length ?? 0;

  const latestPosts = posts.slice(0, 3);
  const latestStories = stories.slice(0, 3);
  const allDocPages = projects.flatMap((p) => p.pages.map((page) => ({ ...page, projectTitle: p.title })));
  const latestDocs = allDocPages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
          Content
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Blog posts, personal stories, documentation, and tips — everything I&apos;ve written, in one place.
        </p>
      </div>

      {/* Section Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {sections.map((section, i) => (
          <Link
            key={section.href}
            href={section.href}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-8 hover:bg-muted/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${section.color} opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity`} />
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} bg-opacity-20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{section.title}</h2>
              <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{section.count} {section.count === 1 ? "entry" : "entries"}</span>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Latest Blog Posts */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
          <Link href="/blog" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-5 rounded-xl border border-border/50 bg-muted/10 hover:bg-muted/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <time>{format(parseISO(post.date), "MMM d, yyyy")}</time>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime}
                </span>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{post.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Docs */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Docs</h2>
          <Link href="/docs" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {latestDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="block p-5 rounded-xl border border-border/50 bg-muted/10 hover:bg-muted/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="text-xs text-muted-foreground">{doc.projectTitle}</span>
                <span className="text-muted-foreground">·</span>
                <time>{format(parseISO(doc.date), "MMM d, yyyy")}</time>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">{doc.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Stories */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Stories</h2>
          <Link href="/stories" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {latestStories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="block p-5 rounded-xl border border-border/50 bg-muted/10 hover:bg-muted/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <time>{format(parseISO(story.date), "MMM d, yyyy")}</time>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {story.readingTime}
                </span>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">{story.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{story.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
