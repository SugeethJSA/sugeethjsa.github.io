---
title: "Make PNG Images from PDF"
date: "2025-01-02"
description: "How to split PDF pages into PNG images with configurable resolution and share options."
pageOrder: 2
---

This tool splits any PDF into individual PNG images with user-configurable options.

## Why PNG?

PNG images conserve as much raw data as possible, support transparent backgrounds and is generally a much less daunting task to accomplish.

Though we could force the image to render in JPEG, the result will be a lossy file which would have undergone huge processing in the CPU.

## Configuration Options

### Optimise File Size

You can choose to reduce the size of the PDF before it gets passed on to the renderer, so that splitting the PDF into COM Object Pages will not hog CPU space.

### Output Image Size (Downsize PDF)

Generally, when PDF pages are converted into PNG images, the renderer renders the images at the highest possible image resolution that the CPU can support. However, that would slow down shortcut execution.

Users can select their image height from a given list of resolutions or render at native resolution.

> [!NOTE]
> Stability is key while creating shortcuts. This is one of the double-edged sword decisions a creator has to make.

### Share List

After image generation, a share list provides well-thought-out options:

- **Add them to Photos Library** — save every image to the Photos app.
- **Select and Add them to Photos** — pick specific pages to save.
- **Save to Files** — save to a folder in the Files app.
- **Zip the photos into a file** — great for portability and easy transfer.
- **Share** — share on social media or send to other apps.
