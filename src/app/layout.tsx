import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sugeeth Jayaraj | Developer & Innovator",
  description: "Portfolio of Sugeeth Jayaraj, a Developer & Innovator based in Chennai.",
  openGraph: {
    title: "Sugeeth Jayaraj | Developer & Innovator",
    description: "Portfolio of Sugeeth Jayaraj, a Developer & Innovator based in Chennai.",
    url: "https://sugeethjsa.com", // Replace with actual URL when deployed
    siteName: "Sugeeth Jayaraj Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugeeth Jayaraj | Developer & Innovator",
    description: "Portfolio of Sugeeth Jayaraj, a Developer & Innovator based in Chennai.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary selection:text-primary-foreground`}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                  <Link href="/" className="transition-colors hover:text-primary text-foreground/80">Home</Link>
                  <Link href="/about" className="transition-colors hover:text-primary text-foreground/80">About</Link>
                  <Link href="/projects" className="transition-colors hover:text-primary text-foreground/80">Projects</Link>
                  <Link href="/blog" className="transition-colors hover:text-primary text-foreground/80">Blog</Link>
                  <Link href="/docs" className="transition-colors hover:text-primary text-foreground/80">Docs</Link>
                  <Link href="/stories" className="transition-colors hover:text-primary text-foreground/80">Stories</Link>
                </nav>

                <div className="flex items-center flex-1 justify-between md:justify-end gap-2">
                  <div className="md:hidden">
                    <span className="font-bold tracking-tight text-lg">SJ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <MobileNav />
                  </div>
                </div>

              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
