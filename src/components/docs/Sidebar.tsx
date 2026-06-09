import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Sample navigation structure – can be generated dynamically later
const navItems = [
  { title: "Projects", href: "/docs", children: [
    { title: "Spring Lock", href: "/docs/spring-lock" },
    { title: "Other Project", href: "/docs/other-project" },
  ]},
  { title: "Guides", href: "/docs/guides", children: [] },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto p-4 bg-white/30 backdrop-blur-md rounded-lg border border-border/20">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className={cn(
                "block font-medium text-base hover:text-foreground transition-colors",
                pathname.startsWith(item.href) && "text-emerald-600"
              )}
            >
              {item.title}
            </Link>
            {item.children && item.children.length > 0 && (
              <ul className="ml-4 mt-1 space-y-1">
                {item.children.map((child) => (
                  <li key={child.title}>
                    <Link
                      href={child.href}
                      className={cn(
                        "block text-sm hover:text-foreground transition-colors",
                        pathname === child.href && "text-emerald-500"
                      )}
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
