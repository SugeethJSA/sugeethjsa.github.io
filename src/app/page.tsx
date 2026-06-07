"use client";

import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";

// Import Official Icons
import { SiTypescript, SiVite, SiTailwindcss, SiFigma, SiFramer } from "react-icons/si";
import { FaReact, FaPython, FaLinux, FaVideo, FaHandshake, FaUsers, FaRobot } from "react-icons/fa";

const IconMap: Record<string, React.ElementType> = {
  SiTypescript, FaReact, FaPython, SiVite, SiTailwindcss, FaLinux,
  SiFigma, FaVideo, SiFramer,
  FaHandshake, FaUsers, FaRobot
};

export default function Home() {
  const { profile, stats, skills, projects } = portfolioData;
  const featuredProjects = projects.filter(p => p.featured);

  const allSkills = [
    ...skills.development,
    ...skills.design,
    ...skills.leadership
  ];

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              <span className="text-sm font-medium">{profile.availability}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm {profile.name.split(' ')[0]}. <br />
              <span className="text-muted-foreground font-medium">{profile.role}</span>
            </h1>

            {/* Bio Paragraphs */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {profile.bio[0]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
              <Button size="lg" asChild className="rounded-full shadow-md">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full bg-background/50 backdrop-blur-sm border-border shadow-sm">
                <a href={profile.resumeUrl} download="Sugeeth_Jayaraj_Profile.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="https://github.com/SugeethJSA" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-border">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sugeethjsa" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-border">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:sugeeth2007@gmail.com" className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-border">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-background/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative z-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
            <p className="text-muted-foreground">The technologies I use to bring ideas to life.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {allSkills.map((skill, index) => {
              const IconComponent = IconMap[skill.icon];
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="bg-background/60 backdrop-blur-md border-border shadow-sm hover:shadow-md hover:bg-muted/30 transition-all text-center">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      {IconComponent && <IconComponent className="w-8 h-8 mb-3 text-foreground" />}
                      <span className="text-sm font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted/20 relative z-10 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground">Some of the projects I'm most proud of.</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex rounded-full bg-background/50 backdrop-blur-sm border-border">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-background/60 backdrop-blur-md border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="aspect-[16/9] bg-muted relative flex items-center justify-center p-6 border-b border-border">
                     <h3 className="text-xl font-bold text-center z-10">{project.title}</h3>
                     <Badge className="absolute top-4 left-4 bg-background/80 text-foreground backdrop-blur-md border-border">
                       {project.category}
                     </Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground border-border">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                    <Button variant="default" className="w-full shadow-sm" asChild>
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

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}