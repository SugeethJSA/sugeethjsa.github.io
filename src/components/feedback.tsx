"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Feedback() {
  const [vote, setVote] = useState<"up" | "down" | null>(null);

  if (vote) {
    return (
      <div className="text-sm text-muted-foreground text-center py-2">
        Thanks for your feedback!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 py-4 border-t border-border/50 mt-8">
      <span className="text-sm text-muted-foreground">Was this helpful?</span>
      <button
        onClick={() => setVote("up")}
        className={cn(
          "p-2 rounded-lg transition-colors",
          "hover:bg-emerald-500/10 hover:text-emerald-500 text-muted-foreground"
        )}
        aria-label="Helpful"
      >
        <ThumbsUp className="w-4 h-4" />
      </button>
      <button
        onClick={() => setVote("down")}
        className={cn(
          "p-2 rounded-lg transition-colors",
          "hover:bg-red-500/10 hover:text-red-500 text-muted-foreground"
        )}
        aria-label="Not helpful"
      >
        <ThumbsDown className="w-4 h-4" />
      </button>
    </div>
  );
}
