"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/docs", label: "Docs" },
  { href: "/stories", label: "Stories" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2 font-display font-bold text-xl text-foreground hover:text-primary transition-all duration-300 focus-ring rounded-lg px-2 py-1"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="hidden sm:block">Sugeeth Jayaraj</span>
            <span className="sm:hidden">SJ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-muted/50 focus-ring",
                  pathname === link.href
                    ? "text-primary bg-muted/30"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {/* Active indicator */}
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-muted">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="focus-ring"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  )} 
                />
                <X 
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  )} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen 
            ? "max-h-64 opacity-100 pb-4" 
            : "max-h-0 opacity-0"
        )}>
          <div className="glass rounded-xl border border-white/10 mt-2 p-2 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-muted/50 focus-ring animate-float",
                  pathname === link.href
                    ? "text-primary bg-muted/30"
                    : "text-foreground",
                  isOpen && "animate-fade-in"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}