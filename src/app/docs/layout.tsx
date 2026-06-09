import DocsSidebar from "@/components/docs/Sidebar";
import { getDocs } from "@/lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const docs = getDocs();

  return (
    <div className="flex">
      <aside className="hidden lg:block w-64 flex-shrink-0 px-4 py-8">
        <DocsSidebar docs={docs} />
      </aside>
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
