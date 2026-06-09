import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="mb-12 space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-6 w-72" />
      </div>
      <div className="grid gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border/40 p-6 space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
