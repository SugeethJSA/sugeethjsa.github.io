import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
            <img src="/images/c7061e57f15688c0fb408dee71cc48b0b70c519a.png" alt="Dave Cutler" className="rounded-xl border border-border shadow-md max-w-full h-auto max-h-96" />
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

        {/* Projects Section */}
        <section className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border/50 shadow-sm">
          <h2 className="text-3xl font-bold">Mini-Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">Spring Lock</h3>
              <p className="text-muted-foreground text-sm">Shortcut to lock apps on iPhone using a proof-of-concept automation.</p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">Spring PDF Tools</h3>
              <p className="text-muted-foreground text-sm">Offline, on-device PDF manipulation utility for iPhones.</p>
            </div>
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
              <img src="/images/c56d42f0369c75fcd691d3965507140d6eb0062b.png" alt="Tool logo" className="h-16 w-auto object-contain rounded" />
              <img src="/images/e01941220ed44d67e3c565e97728d3234d128510.png" alt="Tool logo" className="h-16 w-auto object-contain rounded" />
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
            <img src="/images/27206ff1c949332fb771b1ed47cf9360842d1c15.jpg" alt="Certificate 1" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/5ad34b824f27ba390e5ca5ddfe68eaff38d90250.jpg" alt="Certificate 2" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/f999e6c4c4873a017e8adea2deac8a2df619af42.jpg" alt="Certificate 3" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/b1774124e501c27920005d9b88efb1ef70645ef5.jpg" alt="Certificate 4" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/cb95a342b9198f456d15e2a36ffa3cc346d8beb4.jpg" alt="Certificate 5" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/88b5416b27a1b700a849413f75b0c187855837df.jpg" alt="Certificate 6" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/5a401c31986f8760c91d0cd05de750cee8fafe39.png" alt="Certificate 7" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
            <img src="/images/ef00ce28ba4cf4b6d845256106c82932b6dca68c.png" alt="Certificate 8" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          </div>
        </section>

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

        {/* Contact */}
        <section className="space-y-6 text-center pt-8 border-t border-border">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground">Feel free to reach out to me via email or connect with me on LinkedIn.</p>
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
          </div>
        </section>
        
      </div>
    </div>
  );
}