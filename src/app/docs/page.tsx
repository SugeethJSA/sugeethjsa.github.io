export default function DocsIndex() {
  return (
    <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
      <div className="not-prose mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground">Comprehensive guides, references, and rules.</p>
      </div>
      <p>
        Welcome to the documentation hub. Here you'll find detailed technical overviews, rules and regulations for various groups, and manuals for my apps like Spring Lock.
      </p>
      <p>
        Select a document from the left sidebar to start reading.
      </p>
    </article>
  );
}
