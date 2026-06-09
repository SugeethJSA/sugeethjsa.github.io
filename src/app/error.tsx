"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
      <div className="p-4 rounded-full bg-destructive/10">
        <AlertTriangle className="w-12 h-12 text-destructive" />
      </div>
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground max-w-md">
        An unexpected error occurred. Please try again or contact me if the problem persists.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
