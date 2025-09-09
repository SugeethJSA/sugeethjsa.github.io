import { useState } from "react";
import { Github, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard. Built with React and Node.js.",
    image: "/api/placeholder/400/240",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    image: "/api/placeholder/400/240",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "Frontend",
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
    image: "/api/placeholder/400/240",
    technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    category: "Frontend",
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 4,
    title: "REST API Service",
    description: "A scalable RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    image: "/api/placeholder/400/240",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    category: "Backend",
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and dark mode support.",
    image: "/api/placeholder/400/240",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 6,
    title: "Data Analytics Tool",
    description: "A comprehensive data analytics tool with interactive charts, real-time data processing, and export capabilities.",
    image: "/api/placeholder/400/240",
    technologies: ["Python", "Flask", "D3.js", "pandas", "Redis"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    featured: false
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const featuredMatch = !showFeatured || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of projects that showcase my journey as a developer. 
              Each project represents a unique challenge and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <Button
              variant={showFeatured ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFeatured(!showFeatured)}
              className="transition-all"
            >
              <Filter className="w-4 h-4 mr-2" />
              Featured Only
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group elevation-1 hover:elevation-2 transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-accent opacity-30 relative overflow-hidden">
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}