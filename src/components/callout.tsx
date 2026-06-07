import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "default" | "warning" | "danger" | "success" | "info";
  children: React.ReactNode;
  title?: string;
}

export function Callout({
  children,
  type = "default",
  title,
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-xl border p-4 backdrop-blur-md",
        {
          "border-border bg-muted/40 text-foreground": type === "default",
          "border-red-900/50 bg-red-950/20 text-red-200": type === "danger",
          "border-yellow-900/50 bg-yellow-950/20 text-yellow-200": type === "warning",
          "border-green-900/50 bg-green-950/20 text-green-200": type === "success",
          "border-blue-900/50 bg-blue-950/20 text-blue-200": type === "info",
        }
      )}
    >
      <div className="mr-4 mt-0.5 flex-shrink-0">
        {type === "default" && <Info className="h-5 w-5" />}
        {type === "info" && <Info className="h-5 w-5 text-blue-400" />}
        {type === "danger" && <AlertCircle className="h-5 w-5 text-red-400" />}
        {type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-400" />}
        {type === "success" && <CheckCircle2 className="h-5 w-5 text-green-400" />}
      </div>
      <div className="w-full min-w-0">
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        <div className="[&>p]:m-0 text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
}
