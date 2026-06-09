import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { SkillsGrid } from "@/components/home/SkillsGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ContactSection } from "@/components/home/ContactSection";
import { LazySection } from "@/components/lazy-section";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  const { profile, stats, skills, projects } = portfolioData;

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <Hero profile={profile} />
      <LazySection><Stats stats={stats} /></LazySection>
      <LazySection><SkillsGrid skills={skills as any} /></LazySection>
      <LazySection><FeaturedProjects projects={projects as any} /></LazySection>
      <LazySection><ContactSection /></LazySection>
      
      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-muted-foreground relative z-10 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}