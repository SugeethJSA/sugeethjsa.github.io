import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { BackToTop } from "@/components/back-to-top";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sugeeth Jayaraj | Developer & Innovator",
  description: "Portfolio of Sugeeth Jayaraj, a Developer & Innovator based in Chennai.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Sugeeth Jayaraj | Developer & Innovator",
    description: "Portfolio of Sugeeth Jayaraj, a Developer & Innovator based in Chennai.",
    url: "https://sugeethjsa.com",
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
            <Navigation />
            <main className="flex-1 pt-16"><PageTransition>{children}</PageTransition></main>
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
