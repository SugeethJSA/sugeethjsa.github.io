import { Trophy, Medal, Award, Target, Users, Brain, Code } from "lucide-react";

export const metadata = {
  title: "Achievements | Sugeeth Jayaraj S A",
  description: "Academic, technical, and extracurricular achievements including olympiad ranks and Toastmasters recognition.",
};

const achievements = [
  {
    icon: Trophy,
    title: "International Rank 13 — National Cyber Olympiad",
    description: "Secured 99.69 percentile, demonstrating exceptional aptitude in cybersecurity and informatics at the national level.",
  },
  {
    icon: Medal,
    title: "International Rank 27 — Cyber Olympiad",
    description: "Achieved top-tier global ranking in the Cyber Olympiad, competing against thousands of participants worldwide.",
  },
  {
    icon: Medal,
    title: "International Rank 49 — Informatics Olympiad",
    description: "Recognized among the top 50 internationally in the Informatics Olympiad for computational thinking and problem-solving.",
  },
  {
    icon: Brain,
    title: "1st Place — IBM Qiskit Hackathon (TechnoVIT 2025)",
    description: "Built a project comparing RNNs against Quantum Reservoir Computing to forecast renewable energy, winning first place.",
  },
  {
    icon: Users,
    title: "Toastmasters Area Conclave — Best Prepared Speaker",
    description: "Won Best Prepared Speaker at the Toastmasters Area Conclave competition, demonstrating leadership and public speaking excellence.",
  },
  {
    icon: Code,
    title: "V-Vortex 2026 — Student Coordinator",
    description: "Led and coordinated a major inter-college event under SCOPE VIT Chennai, managing teams and logistics for 500+ participants.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mt-12 mb-20">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
          Achievements
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Accolades across academics, technology, and public speaking at the state, national, and international levels.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group relative bg-muted/20 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-20 space-y-8">
        <h2 className="text-3xl font-bold text-center">Certificate Gallery</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto">
          A selection of certificates and recognition from olympiads and events.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src="/images/27206ff1c949332fb771b1ed47cf9360842d1c15.jpg" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/5ad34b824f27ba390e5ca5ddfe68eaff38d90250.jpg" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/f999e6c4c4873a017e8adea2deac8a2df619af42.jpg" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/b1774124e501c27920005d9b88efb1ef70645ef5.jpg" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/cb95a342b9198f456d15e2a36ffa3cc346d8beb4.jpg" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/88b5416b27a1b700a849413f75b0c187855837df.jpg" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/5a401c31986f8760c91d0cd05de750cee8fafe39.png" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
          <img src="/images/ef00ce28ba4cf4b6d845256106c82932b6dca68c.png" alt="Olympiad Certificate" loading="lazy" className="rounded-lg shadow-sm border border-border w-full h-auto object-cover hover:scale-105 transition-transform" />
        </div>
      </section>
    </div>
  );
}
