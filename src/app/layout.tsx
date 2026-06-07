import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sugeeth Jayaraj | Developer & Innovator",
  description: "Portfolio of Sugeeth Jayaraj, a Developer & Innovator based in Chennai.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary selection:text-primary-foreground`}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
                <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
                <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</Link>
                <Link href="/stories" className="transition-colors hover:text-foreground/80 text-foreground/60">Stories</Link>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
