"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiTypescript, SiVite, SiTailwindcss, SiFigma, SiFramer } from "react-icons/si";
import { FaReact, FaPython, FaLinux, FaVideo, FaHandshake, FaUsers, FaRobot } from "react-icons/fa";

const IconMap: Record<string, React.ElementType> = {
  SiTypescript, FaReact, FaPython, SiVite, SiTailwindcss, FaLinux,
  SiFigma, FaVideo, SiFramer,
  FaHandshake, FaUsers, FaRobot
};

type Skill = {
  name: string;
  icon: string;
};

type SkillsGridProps = {
  skills: {
    development: Skill[];
    design: Skill[];
    leadership: Skill[];
  };
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  const allSkills = [
    ...skills.development,
    ...skills.design,
    ...skills.leadership
  ];

  return (
    <section className="py-24 relative z-10 bg-background overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:bg-primary/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Tech Stack & Tools</h2>
          <p className="text-muted-foreground text-lg">The technologies I use to bring ideas to life.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allSkills.map((skill, index) => {
            const IconComponent = IconMap[skill.icon];
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
              >
                <Card className="glassmorphism hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 text-center group">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    {IconComponent && <IconComponent className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />}
                    <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
