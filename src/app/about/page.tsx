import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Instagram, Music, ExternalLink } from "lucide-react";
import { LazySection } from "@/components/lazy-section";

export const metadata = {
  title: "About Me | Sugeeth Jayaraj S A",
  description: "Learn more about my background, skills, and career goals.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mt-12 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Sugeeth @ Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A fresher studying B.Tech Electronics and Computer Engineering at VIT Chennai, 
            passionate about Artificial Intelligence, Hardware-Software Integration, Quantum Computing, IoT, and Robotics.
          </p>
        </section>

        {/* Intro Section */}
        <section className="prose prose-invert max-w-none text-lg">
          <p>
            Why would one take such a wild course? Electronics and Computer Engineering seem like the best of none. 
            On one hand, there's the exciting world of Electronics and Communications Engineering that I'm missing out. 
            On the other, Computer Engineering has always been the most magnanimous choice for most of the Gen Z kids.
          </p>
          <p>
            I took ECM (as it is called), because I was inspired by Dave Cutler, the architect of most of the world's 
            underlying code for most popular operating systems, Windows NT being one of the broadly known ones.
          </p>
          <div className="my-8 flex justify-center">
            <img src="/images/c7061e57f15688c0fb408dee71cc48b0b70c519a.png" alt="Dave Cutler" loading="lazy" className="rounded-xl border border-border shadow-md max-w-full h-auto max-h-96" />
          </div>
          <p>
            The people around him were inspired by his innate understanding of the computer technology and the electronic 
            circuitry that worked in tandem harmony to bring the computer to life. As one of the best engineers to have 
            ever lived, he has left a legacy to be desired and followed. Thus I began my journey in life with the aim to 
            create the world's next game-changing operating system, that would fundamentally change our perception of humanity.
          </p>
        </section>

        {/* Two Column Grid for Schooling & Interests */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-border pb-2">Schooling</h2>
            <p className="text-muted-foreground leading-relaxed">
              I grew up in the urban and rapidly developing areas of Chennai and its outskirts. I studied across multiple 
              schools over the time of my life, including my elementary schooling in Woodbury Elementary, Minnesota, US 
              as well as in Don Bosco School of Excellence, Chennai.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I finally finished both my secondary education and senior secondary education under the CBSE at the same school, 
              after which I graduated with a 95.2% in the Boards. Currently, I am pursuing my B.Tech ECM over at VIT Chennai.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am technically strong in Physics and very proficient in Computers. I am especially skilled in AI, thanks 
              to the CBSE Intel AI collaboration.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-border pb-2">Technical Interests</h2>
            <p className="text-muted-foreground leading-relaxed">
              I was fascinated with Electronics and Computer Science from a very young age. I have explored the domain of 
              Robotics with the help of the Vex Robotics Toolkit. At the same time, I love developing meaningful software 
              applications for people to use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I often love to participate in hackathons as they increase curiosity and spark innovation. My team and I built 
              a project comparing RNNs against Quantum Reservoir Computing to forecast renewable energy, which bagged first 
              place in the <strong>IBM Qiskit Hackathon</strong>.
            </p>
          </div>
        </section>

          {/* Personality Section */}
          <section className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-3xl font-bold">MBTI: ENFJ-T (The Protagonist)</h2>
            <p className="text-muted-foreground leading-relaxed">
              As an ENFJ-T (Extraverted, Intuitive, Feeling, Judging – Turbulent), I thrive on connecting with people, 
              inspiring growth, and turning ideas into action. Protagonists are natural-born leaders who can rally teams 
              around a shared vision — a trait I have exercised as Student Coordinator for V-Vortex 2026 and as a 
              frequent speaker at Toastmasters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Turbulent aspect drives my continuous improvement mindset: I set high standards, learn voraciously from 
              feedback, and am always looking for ways to level up — whether that is debugging a complex system, preparing 
              a conference talk, or refining a shortcut on RoutineHub.
            </p>
          </section>

          {/* Public Speaking Section */}
          <section className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-3xl font-bold">Toastmasters & Public Speaking</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am an active member of Toastmasters, where I have honed my public speaking, evaluation, and leadership 
              skills. I won <strong>Best Prepared Speaker</strong> at the Area Conclave competition, and regularly 
              participate in club meetings to deliver speeches and take on leadership roles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through Toastmasters, I have learned to structure compelling narratives, think on my feet during 
              Table Topics, and provide constructive evaluations — skills that translate directly into my technical 
              presentations and team collaborations.
            </p>
          </section>

          <LazySection>
          {/* Apple Shortcuts Section */}
          <section className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-3xl font-bold">Apple Shortcuts & Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I create shortcuts for the Apple Shortcuts app as a hobby, for the love and fun of it. I publish my shortcuts on{" "}
              <a href="https://routinehub.co/user/Sugeeth" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                RoutineHub
              </a>.
            </p>
            <h3 className="text-2xl font-semibold mt-6">Spring Series</h3>
            <p className="text-muted-foreground leading-relaxed">
              These shortcuts are a set of everyday utilities that any person might need for their digital life. They give a much-needed fresh breath of air to any person&apos;s phone; making a person&apos;s life a bit easier or secure and giving them peace of mind; knowing that there exists a tool to cater to their needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">Spring Lock</h3>
                <p className="text-muted-foreground text-sm">Shortcut to lock apps on iPhone using a proof-of-concept automation with CryptoKit encryption and 2FA.</p>
                <Link href="/docs/spring-lock" className="text-xs text-primary hover:underline mt-2 inline-block">View Docs</Link>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">Spring PDF Tools</h3>
                <p className="text-muted-foreground text-sm">Offline, on-device PDF manipulation utility for iPhones — split, merge, convert, and more.</p>
                <Link href="/docs/spring-pdf-tools" className="text-xs text-primary hover:underline mt-2 inline-block">View Docs</Link>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">Spring Updater</h3>
                <p className="text-muted-foreground text-sm">Planned successor to Ultimate Updater, designed for seamless update management across Spring shortcuts.</p>
              </div>
            </div>
          </section>
          </LazySection>

          <LazySection>
          {/* Projects Section */}
          <section className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-3xl font-bold">Other Mini-Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">AmazeSort</h3>
                <p className="text-muted-foreground text-sm">Sort through files and place them in directories using Rule-based and AI-based approaches.</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">Web Scraper</h3>
                <p className="text-muted-foreground text-sm">Developed with 180DC VIT Chennai to extract social media links and metadata for AI processing.</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-primary">Smart Posture Sensor</h3>
                <p className="text-muted-foreground text-sm">Hardware project using gyroscopes to detect incorrect posture and alert the user.</p>
              </div>
            </div>
          </section>
          </LazySection>

        <LazySection>
        {/* Skills and Mindset */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-border pb-2">Tools & Skills</h2>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li><strong>Languages:</strong> Python, HTML, C, PowerShell</li>
              <li><strong>Systems:</strong> Linux, macOS, Windows Administration</li>
              <li><strong>Design:</strong> PowerPoint, WePik, Canva, iMovie (Video Editing)</li>
              <li><strong>DevOps:</strong> Docker (used to deploy CTF challenges)</li>
              <li><strong>Soft Skills:</strong> Leadership, Oratory, Event Coordination (V-Vortex 2026 Lead)</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <img src="/images/c56d42f0369c75fcd691d3965507140d6eb0062b.png" alt="Tool logo" loading="lazy" className="h-16 w-auto object-contain rounded" />
              <img src="/images/e01941220ed44d67e3c565e97728d3234d128510.png" alt="Tool logo" loading="lazy" className="h-16 w-auto object-contain rounded" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-border pb-2">Engineering Mindset</h2>
            <p className="text-muted-foreground leading-relaxed">
              I approach problem-solving by breaking complex issues into smaller, manageable parts and testing solutions step by step. 
              When troubleshooting, I rely on logical reasoning, careful observation, and learning from errors rather than avoiding them. 
              Through projects and experiments, I have developed an engineering mindset focused on curiosity, precision, adaptability, 
              and continuous improvement.
            </p>
          </div>
        </section>
        </LazySection>

        <LazySection>
        {/* Learning Beyond the Classroom */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-2">Learning Beyond the Classroom</h2>
          <p className="text-muted-foreground leading-relaxed">
            I don't believe that a classroom can teach you everything. I have attended multiple computer-science workshops to enhance my knowledge:
          </p>
          <ul className="space-y-3 text-muted-foreground list-disc list-inside ml-4">
            <li><strong>Decode DSA 2.0</strong> by Abdul Bari - Discovering tricks behind Data Structures and Algorithms.</li>
            <li><strong>Google Cloud Course Study Program</strong> - Learning about cloud infrastructure.</li>
            <li><strong>Introduction to Azure AI</strong> - Deploying AI models using Azure tools.</li>
          </ul>
        </section>
        </LazySection>

        <LazySection>
        {/* Achievements */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-border pb-2">Achievements</h2>
          <p className="text-muted-foreground leading-relaxed">
            I have won multiple accolades at the state, national, and international levels:
          </p>
          <ul className="space-y-3 text-muted-foreground list-disc list-inside ml-4">
            <li>International Rank 13 in the National Cyber Olympiad (99.69 percentile).</li>
            <li>International Ranks 27 and 49 in Cyber and Informatics Olympiads.</li>
            <li>1st place in the IBM Qiskit Hackathon during TechnoVIT 2025.</li>
          </ul>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            <img src="/images/27206ff1c949332fb771b1ed47cf9360842d1c15.jpg" alt="Certificate 1" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/5ad34b824f27ba390e5ca5ddfe68eaff38d90250.jpg" alt="Certificate 2" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/f999e6c4c4873a017e8adea2deac8a2df619af42.jpg" alt="Certificate 3" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/b1774124e501c27920005d9b88efb1ef70645ef5.jpg" alt="Certificate 4" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/cb95a342b9198f456d15e2a36ffa3cc346d8beb4.jpg" alt="Certificate 5" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/88b5416b27a1b700a849413f75b0c187855837df.jpg" alt="Certificate 6" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/5a401c31986f8760c91d0cd05de750cee8fafe39.png" alt="Certificate 7" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/ef00ce28ba4cf4b6d845256106c82932b6dca68c.png" alt="Certificate 8" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          </div>
        </section>
        </LazySection>

        <LazySection>
        {/* Career Goal */}
        <section className="space-y-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-primary/20">
          <h2 className="text-3xl font-bold text-primary">Career Goal</h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            My long-term career goal is to work at the intersection of quantum technology and operating system design, 
            where foundational computing meets next-generation physics. I aim to leverage advances in quantum computing 
            to architect operating systems that can efficiently manage hybrid classical–quantum resources, abstract complex 
            hardware, and make quantum capabilities accessible, scalable, and reliable.
          </p>
        </section>
        </LazySection>

        <LazySection>
        {/* Contact */}
        <section className="space-y-6 text-center pt-8 border-t border-border">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground">Feel free to reach out to me via email or connect with me on social media.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <a href="mailto:sugeeth2007@gmail.com" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>sugeeth2007@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 8122654796</span>
            </div>
            <a href="https://github.com/SugeethJSA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span>SugeethJSA</span>
            </a>
            <a href="https://www.linkedin.com/in/sugeethjsa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/sugeethjsa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="https://routinehub.co/user/Sugeeth" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
              <span>RoutineHub</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <a href="https://www.reddit.com/user/sugeeth_jayaraj" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Reddit
            </a>
            <a href="https://musescore.com/hsag" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              MuseScore
            </a>
            <a href="https://dsta.sh/GXwoUjEjcamb5Xii8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Deepstash
            </a>
          </div>
        </section>
        </LazySection>
        
      </div>
    </div>
  );
}