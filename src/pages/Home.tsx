import { ArrowRight, Github, Linkedin, Mail, Download, Play, Star, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-bg.jpg";

export default function Home() {
  const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"];
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <main className="min-h-screen">
      {/* Ultra-Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-mesh opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-surface opacity-95"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-primary rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Status Badge */}
            <div className="mb-8 flex justify-center">
              <Badge variant="secondary" className="glass px-6 py-2 text-sm font-medium border-white/20">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse-glow"></div>
                Available for new opportunities
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Hello, I'm{" "}
              <span className="text-gradient-primary animate-gradient bg-gradient-primary bg-clip-text text-transparent">
                Sugeeth Jayaraj
              </span>
            </h1>
            
            {/* Subtitle with typing animation effect */}
            <div className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light">
              <span className="inline-block">Crafting</span>{" "}
              <span className="text-gradient-accent bg-gradient-accent bg-clip-text text-transparent font-medium">
                Digital Experiences
              </span>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer who bridges the gap between design and functionality, 
              creating scalable solutions with modern technologies and pixel-perfect execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild variant="gradient" size="xl" className="group">
                <Link to="/projects">
                  <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="glass px-4 py-2 text-sm font-medium border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:text-foreground" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077B5]" },
                { icon: Mail, href: "/contact", label: "Email", color: "hover:text-primary" },
              ].map(({ icon: Icon, href, label, color }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={cn(
                    "glass w-12 h-12 text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus-ring border border-white/10",
                    color
                  )}
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-primary bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work with ultra-modern design */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Featured Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Crafted with{" "}
              <span className="text-gradient-accent bg-gradient-accent bg-clip-text text-transparent">
                Precision
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated selection of projects that showcase innovation, technical excellence, and design finesse.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <Card 
                key={i} 
                className="group glass border-white/10 hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-primary opacity-20 group-hover:opacity-30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="glass">
                      <Zap className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Revolutionary Project {i}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    An innovative solution built with cutting-edge technologies, featuring seamless user experience and robust architecture.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "TypeScript", "AI/ML"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs glass border-white/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 glass">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="gradient" size="sm" className="flex-1">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="cyber" size="xl" className="group">
              <Link to="/projects">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}