"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  profile: {
    name: string;
    role: string;
    availability: string;
    bio: string[];
    resumeUrl: string;
  };
};

export function Hero({ profile }: HeroProps) {
  const firstName = profile.name.split(" ")[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-emerald-500/20"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-500/20"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-cyan-500/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full glassmorphism">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">{profile.availability}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6">
            Hi, I'm <span className="text-gradient">{firstName}</span>.<br />
            <span className="text-foreground font-semibold text-3xl sm:text-5xl md:text-6xl mt-4 block">{profile.role}</span>
          </h1>

          {/* Bio Paragraphs */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {profile.bio[0]}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Button size="lg" asChild className="rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Link href="/projects">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full glassmorphism hover:bg-muted/50 transition-all duration-300">
              <a href={profile.resumeUrl} download="Sugeeth_Jayaraj_Profile.pdf">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/SugeethJSA" target="_blank" rel="noreferrer" className="p-3 rounded-full glassmorphism hover:scale-110 hover:text-primary transition-all duration-300">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sugeethjsa" target="_blank" rel="noreferrer" className="p-3 rounded-full glassmorphism hover:scale-110 hover:text-primary transition-all duration-300">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:sugeeth2007@gmail.com" className="p-3 rounded-full glassmorphism hover:scale-110 hover:text-primary transition-all duration-300">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
