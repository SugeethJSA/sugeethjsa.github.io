import { getDocs } from "@/lib/docs";
import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const docs = getDocs();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Documentation</h2>
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/docs" 
              className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted/50 text-sm font-medium"
            >
              Introduction
            </Link>
            {docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-muted/50 text-sm"
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
