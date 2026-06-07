"use client";

import { useState } from "react";
import { ExternalLink, Filter, Code, Palette, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../../data/portfolio.json";

const categories = ["All", "Development", "Design", "Initiatives"];

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => {
    return selectedCategory === "All" || project.category === selectedCategory;
  });

  return (
    <main className="min-h-screen pt-20 bg-background text-foreground relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A curated collection of my work spanning software development, design, and educational leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 bg-background/60 backdrop-blur-md p-4 rounded-xl border border-border shadow-sm max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category === "Development" && <Code className="w-4 h-4 mr-2" />}
                  {category === "Design" && <Palette className="w-4 h-4 mr-2" />}
                  {category === "Initiatives" && <Briefcase className="w-4 h-4 mr-2" />}
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="group h-full flex flex-col bg-background/60 backdrop-blur-md border border-border shadow-sm hover:shadow-md hover:border-foreground/20 transition-all overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="aspect-[16/9] bg-muted relative flex items-center justify-center p-6 border-b border-border">
                        {project.featured && (
                          <Badge className="absolute top-4 left-4 bg-background/80 text-foreground backdrop-blur-md border border-border z-20">
                            Featured
                          </Badge>
                        )}
                        <h3 className="text-2xl font-bold text-center z-10">{project.title}</h3>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground border-border text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="mt-auto">
                        <Button
                          variant={project.demo !== "#" ? "default" : "outline"}
                          size="sm"
                          className="w-full"
                          asChild
                          disabled={project.demo === "#"}
                        >
                          <a href={project.demo !== "#" ? project.demo : undefined} target={project.demo !== "#" ? "_blank" : undefined} rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {project.demo !== "#" ? "View Project" : "Private / Internal"}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 border border-border">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                No projects found matching your criteria.
              </p>
              <Button variant="outline" onClick={() => setSelectedCategory("All")}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}