import { getAllProjects } from "@/lib/docs";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DocsIndex() {
  const projects = getAllProjects();

  return (
    <main className="container max-w-7xl mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-emerald-500">
          Documentation Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore comprehensive guides, references, and manuals for my projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link key={project.slug} href={`/docs/${project.slug}`}>
            <Card className="glassmorphism h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <CardContent className="p-8 flex flex-col h-full relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <FileText className="w-4 h-4" />
                  <span>{project.pages.length} {project.pages.length === 1 ? "page" : "pages"}</span>
                </div>
                <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                  View Documentation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
