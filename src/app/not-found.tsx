import Link from "next/link";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
      <div className="p-4 rounded-full bg-muted">
        <Frown className="w-16 h-16 text-muted-foreground" />
      </div>
      <h1 className="text-6xl font-black">404</h1>
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
        >
          Browse Blog
        </Link>
      </div>
    </div>
  );
}
