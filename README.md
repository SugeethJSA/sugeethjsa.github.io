# Sugeeth's Expressive Showcase

Welcome to my personal portfolio, blog, and documentation hub. This repository contains the source code for my website, fully generated as a static site and hosted on GitHub Pages.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & shadcn/ui
- **Content Management**: Custom MDX Engine (Markdown files stored in `src/content`)
- **Deployment**: GitHub Pages (Static Export)

## Features

- **Blog**: Read my latest thoughts and articles.
- **Stories**: Personal anecdotes and experiences.
- **Docs**: Comprehensive, GitBook-style documentation with a sticky sidebar, interactive Mermaid diagrams, and beautiful callouts.
- **Markdown-based**: All content is easily maintainable by simply editing `.md` files.

## Local Development

To run this project locally:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Content Management

All site content is driven by standard markdown files. Simply add or edit `.md` files in the following directories:

- `src/content/blog/` - For blog posts
- `src/content/docs/` - For technical documentation
- `src/content/stories/` - For personal stories

### Rich Documentation Support

The Docs and Stories sections support advanced MDX features:
- **Mermaid Diagrams**: Just use ````mermaid` blocks to render interactive SVG diagrams!
- **Callouts**: Use GitHub-style `> [!NOTE]` alerts.
- **React Components**: You can inject React components like `<CardGrid>` and `<Card>` directly into your markdown.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions. Whenever a push to the `main` branch occurs, the site is statically compiled into the `out` directory and published.
