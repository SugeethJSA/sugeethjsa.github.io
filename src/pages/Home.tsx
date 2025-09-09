import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-surface"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-surface opacity-90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sugeeth Jayaraj
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A passionate developer crafting digital experiences with modern technologies and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="elevation-2 hover:elevation-3 transition-all">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="elevation-1 hover:elevation-2 transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "/contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-primary transition-colors focus-ring"
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating meaningful digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group elevation-1 hover:elevation-2 transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-accent opacity-20 group-hover:opacity-30 transition-opacity" />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Project {i}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "TypeScript", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}