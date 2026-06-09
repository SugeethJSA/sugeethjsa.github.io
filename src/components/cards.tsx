import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Shield, Layout, Settings, Wrench, FolderLock, CloudDownload, Camera,
  Zap, Trash2, Bell, Clock, FileText, Tag, Image, Building2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  FolderLock: <FolderLock className="w-5 h-5" />,
  CloudDownload: <CloudDownload className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Trash2: <Trash2 className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Tag: <Tag className="w-5 h-5" />,
  Image: <Image className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
};

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
      {children}
    </div>
  );
}

export function MDXCard({
  href,
  title,
  children,
  icon,
}: {
  href?: string;
  title: string;
  children: React.ReactNode;
  icon?: string;
}) {
  const iconEl = icon ? iconMap[icon] ?? <span className="text-muted-foreground">{icon}</span> : null;

  const content = (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {iconEl && <div className="text-muted-foreground group-hover:text-foreground transition-colors">{iconEl}</div>}
        <h3 className="font-semibold tracking-tight text-lg text-foreground">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );

  const className = cn(
    "group flex flex-col justify-between rounded-xl border border-border/40 bg-background/60 p-6 shadow-sm transition-all hover:bg-muted/50 hover:shadow-md backdrop-blur-md h-full"
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
