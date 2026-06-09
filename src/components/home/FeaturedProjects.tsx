"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  demo: string;
  featured: boolean;
  image?: string;
};

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-24 bg-gradient-premium relative z-10 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg">Some of the projects I'm most proud of.</p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex rounded-full glassmorphism hover:bg-background/80">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col glassmorphism overflow-hidden group">
                <div className="aspect-[16/9] relative overflow-hidden bg-muted border-b border-border">
                  {/* Image Placeholder - Users can replace this logic when they have actual image URLs */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <h3 className="text-2xl font-black text-center px-4 z-10 opacity-50 drop-shadow-md">{project.title}</h3>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-background/80 text-foreground backdrop-blur-md border-border shadow-sm">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow relative">
                  {/* Subtle gradient glow behind text */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold mb-3 z-10">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed z-10">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 z-10">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-background/50 border-border text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-background/50 border-border text-xs font-medium">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="default" className="w-full shadow-md hover:shadow-primary/25 transition-all z-10" asChild>
                    <a href={project.demo !== "#" ? project.demo : "#"} target={project.demo !== "#" ? "_blank" : "_self"} rel="noreferrer">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Button variant="outline" size="lg" className="w-full rounded-full glassmorphism" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
