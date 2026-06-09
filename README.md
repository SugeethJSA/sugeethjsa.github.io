# Sugeeth's Personal Website

Personal portfolio, blog, stories, and documentation hub built with Next.js. Statically exported and hosted on GitHub Pages.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS & shadcn/ui
- **Content**: Markdown files with gray-matter frontmatter, rendered via `react-markdown`
- **Diagrams**: Mermaid (via ````mermaid` code blocks)
- **Deployment**: GitHub Pages (static export via `next.config.mjs`)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Structure

All content is plain `.md` files. Frontmatter (title, date, description) is required.

```
src/content/
├── blog/            # Blog posts (flat .md files)
├── stories/         # Personal stories (flat .md files)
└── docs/            # Documentation (hierarchical — see below)
```

### Docs — Hierarchical Structure

Each project gets its own directory under `src/content/docs/` with an `index.md` as the main page and additional `.md` files as subpages.

```
src/content/docs/
├── spring-lock/
│   ├── index.md              ← Main page (url: /docs/spring-lock)
│   └── version-history.md    ← Subpage (url: /docs/spring-lock/version-history)
├── spring-pdf-tools/
│   ├── index.md              ← /docs/spring-pdf-tools
│   ├── naming-scheme.md
│   ├── make-png.md
│   ├── make-pdf.md
│   └── version-history.md
├── hsag-ingeniousity/
│   └── index.md
└── quick-start-guide.md      ← Standalone doc (not in a directory)
```

**Adding a new project:**
1. Create a directory under `src/content/docs/<project-slug>/`
2. Add `index.md` with frontmatter
3. Optionally add subpage `.md` files
4. Set `projectOrder` in frontmatter to control sort order on the docs index page

**Adding a subpage to an existing project:**
1. Add a `.md` file in the project's directory
2. Set `pageOrder` in frontmatter to control sort order in the sidebar

### Routes

| URL pattern | Source file |
|---|---|
| `/docs` | Auto-generated index from all projects |
| `/docs/<slug>` | `<slug>/index.md` or `<slug>.md` |
| `/docs/<project>/<page>` | `<project>/<page>.md` |

## Custom MDX Components

Available inside any `.md` file in the content directories:

### `<cardgrid>` / `<card>`
2-column responsive card grid. `icon` is a string mapped to a Lucide icon.

```html
<cardgrid>
  <card title="My Card" href="/some-link" icon="Shield">
    Description text here.
  </card>
</cardgrid>
```

**Available icon names:** Shield, Layout, Settings, Wrench, FolderLock, CloudDownload, Camera, Zap, Trash2, Bell, Clock, FileText, Tag, Image, Building2

### `<step>`
Numbered step for guides.

```html
<step step="1" title="Step Name">
  Instructions here.
</step>
```

### `<tabs>` / `<tabslist>` / `<tabstrigger>` / `<tabscontent>`
Radix UI tabs (shadcn/ui).

### Callouts
GitHub-style alerts via blockquotes:

```
> [!NOTE]
> Background context.

> [!WARNING]
> Breaking changes.

> [!CAUTION]
> Data loss or security risk.

> [!IMPORTANT] or [!SUCCESS]
> Success or important info.
```

### Mermaid Diagrams

    ```mermaid
    graph LR; A-->B;
    ```

## Key Files

| Path | Purpose |
|---|---|
| `src/lib/docs.ts` | Docs data loader — reads flat `.md` files and directory-based projects |
| `src/components/mdx-components.tsx` | MDX component registry (maps HTML tags to React components) |
| `src/components/cards.tsx` | CardGrid + MDXCard with Lucide icon map |
| `src/components/callout.tsx` | Alert-style callout boxes |
| `src/app/docs/[...slug]/page.tsx` | Catch-all route for all doc pages |
| `src/data/portfolio.json` | Projects data for the /projects page |

## Deployment

Pushed to `main` → GitHub Actions runs `npm run build` → static files in `out/` are deployed to GitHub Pages.

Build locally to verify:
```bash
npm run build
```
