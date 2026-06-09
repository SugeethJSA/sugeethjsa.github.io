import { Skeleton } from "@/components/ui/skeleton";

export default function DocsLoading() {
  return (
    <div className="container max-w-7xl py-16 mx-auto px-4">
      <div className="mb-16 text-center space-y-4">
        <Skeleton className="h-12 w-80 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-border/40 p-8 space-y-4">
            <Skeleton className="h-12 w-12 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
