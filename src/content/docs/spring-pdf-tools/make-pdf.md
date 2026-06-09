---
title: "Make PDF — Readable or Unreadable"
date: "2025-01-02"
description: "Create readable PDFs with selectable text or unreadable PDFs with rasterised pages."
pageOrder: 3
---

This is not your normal PDF creator tool — it contains two distinct modules.

## Make Readable PDF

This module creates a PDF from the given input while ensuring that selectable text remains selectable in the output. Ideal for document archiving and sharing where text extraction matters.

## Make Unreadable PDF

This module creates a PDF by turning each page into an image before assembling them back into a single PDF. The result has non-selectable text.

You can set the quality of each page individually.

---

## Create PDF from Master ZIP

> [!WARNING]
> Create a zip file containing other zip files before passing it to the shortcut. Only then this option will work.

This is a niche automation tool. The process:

1. Unzips the master ZIP file
2. Unzips each inner ZIP
3. Combines the contents of each inner ZIP into individual PDFs
4. Merges all PDFs into a single document

The tool maintains the order of objects alphabetically by name. For example, a ZIP starting with `A` will be processed first, and within that, objects starting with `A` come first.

Pretty useful for automating the creation of a single PDF from a combination of ZIP archives.
