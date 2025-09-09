import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Code, Palette, Zap } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
  ];

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Built responsive web applications and RESTful APIs. Collaborated with design teams to create user-friendly interfaces."
    },
    {
      title: "Junior Developer",
      company: "StartupCorp",
      period: "2019 - 2020",
      description: "Developed features for e-commerce platform. Gained experience in agile development and version control."
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate software developer with a love for creating elegant solutions 
              to complex problems. With expertise in modern web technologies, I bridge the 
              gap between design and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Personal Info */}
            <div className="lg:col-span-1">
              <Card className="elevation-1">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-display font-bold text-primary-foreground">SJ</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">Sugeeth Jayaraj</h2>
                    <p className="text-muted-foreground">Software Developer</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Available for opportunities
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Text */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">My Journey</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    My journey in software development began with a curiosity about how things work 
                    behind the scenes. What started as tinkering with HTML and CSS has evolved into 
                    a passion for creating full-stack applications that solve real-world problems.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying up-to-date with the 
                    latest technologies. When I'm not coding, you can find me exploring new frameworks, 
                    contributing to open-source projects, or enjoying the great outdoors.
                  </p>
                  <p>
                    I'm always excited to take on new challenges and collaborate with teams that 
                    share my passion for building exceptional digital experiences.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Skills & Technologies</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="elevation-1">
                    <CardContent className="p-6 text-center">
                      <Code className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Development</h3>
                      <p className="text-sm text-muted-foreground">Full-stack web development with modern frameworks</p>
                    </CardContent>
                  </Card>
                  <Card className="elevation-1">
                    <CardContent className="p-6 text-center">
                      <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Design</h3>
                      <p className="text-sm text-muted-foreground">UI/UX design with attention to user experience</p>
                    </CardContent>
                  </Card>
                  <Card className="elevation-1">
                    <CardContent className="p-6 text-center">
                      <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Performance</h3>
                      <p className="text-sm text-muted-foreground">Optimizing applications for speed and scalability</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <Card key={index} className="elevation-1">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-3">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}