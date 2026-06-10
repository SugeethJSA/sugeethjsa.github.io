import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function AuthorBio() {
  return (
    <div className="mt-12 p-6 rounded-xl border border-border/50 bg-muted/20 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
        SJ
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-sm">Sugeeth Jayaraj S A</p>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          B.Tech ECM at VIT Chennai. Building at the intersection of AI, systems, and electronics.
          ML enthusiast, Toastmasters speaker, Apple Shortcuts hobbyist.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <Link href="https://github.com/SugeethJSA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/sugeethjsa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link href="mailto:sugeeth2007@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
