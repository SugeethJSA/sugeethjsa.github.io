"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";

// Import Official Icons
import { SiTypescript, SiVite, SiTailwindcss, SiFigma, SiFramer } from "react-icons/si";
import { FaReact, FaPython, FaLinux, FaVideo, FaHandshake, FaUsers, FaRobot } from "react-icons/fa";

const IconMap: Record<string, React.ElementType> = {
  SiTypescript, FaReact, FaPython, SiVite, SiTailwindcss, FaLinux,
  SiFigma, FaVideo, SiFramer,
  FaHandshake, FaUsers, FaRobot
};

export default function About() {
  const { profile, skills, experience, education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Getting to know the person behind the code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Personal Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-28 bg-background/60 backdrop-blur-md border-border shadow-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center border border-border">
                      <span className="text-4xl font-bold text-muted-foreground">{profile.initials}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
                    <p className="text-muted-foreground font-medium">{profile.role}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-3" />
                      {profile.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-3" />
                      {profile.availability}
                    </div>
                  </div>
                  
                  <Button className="w-full shadow-sm" asChild>
                    <a href={profile.resumeUrl} download="Sugeeth_Jayaraj_Profile.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content Area */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-16"
            >
              {/* About Text */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">My Journey</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  {profile.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Skills Area */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Skills & Focus Areas</h2>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {Object.entries(skills).map(([category, catSkills]) => (
                    <Card key={category} className="bg-background/60 backdrop-blur-md border-border shadow-sm">
                      <CardContent className="p-5">
                        <h3 className="font-semibold mb-4 capitalize">{category}</h3>
                        <div className="flex flex-col gap-3">
                          {catSkills.map((skill) => {
                            const IconComponent = IconMap[skill.icon];
                            return (
                              <div key={skill.name} className="flex items-center text-sm text-muted-foreground">
                                {IconComponent && <IconComponent className="w-4 h-4 mr-3" />}
                                {skill.name}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Experience Timeline */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-8 border-b border-border pb-2">Experience</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-border">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-muted-foreground shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/60 backdrop-blur-md border-border shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex flex-col mb-2">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{exp.period}</span>
                            <h3 className="font-bold text-lg">{exp.title}</h3>
                          </div>
                          <p className="font-medium text-sm mb-3">{exp.company}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education Timeline */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-8 border-b border-border pb-2">Education</h2>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-border">
                  {education.map((edu, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-muted text-muted-foreground shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/60 backdrop-blur-md border-border shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex flex-col mb-2">
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{edu.period}</span>
                            <h3 className="font-bold text-lg">{edu.degree}</h3>
                          </div>
                          <p className="font-medium text-sm mb-3">{edu.school}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}