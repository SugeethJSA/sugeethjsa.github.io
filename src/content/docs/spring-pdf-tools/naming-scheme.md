---
title: "Naming Scheme API"
date: "2025-01-01"
description: "API documentation for the custom naming scheme module in Spring PDF Tools."
pageOrder: 1
---

**Naming Scheme** is a modular sub-system of [Spring PDF Tools](/docs/spring-pdf-tools) that constructs file names from configurable parts. Each part can be a pre-configured list or a free-text prompt, set up once and reused across sessions.

> [!NOTE]
> The API is verbose and aligns with the **Spring API philosophy**. The full philosophy will be published once finalised.

## Setup / Reset API

Pass this dictionary to the shortcut to invoke Naming Scheme setup:

```json
{
  "Target Name": "Spring PDF Tools",
  "Invoke": "Naming Scheme",
  "Run": "Setup"
}
```

The setup walks through list configuration and text-prompt configuration in order. Once set, the order cannot be changed. Configuration is saved only after all input is complete — if cancelled mid-way, original settings remain intact.

## General Run API

```json
{
  "Target Name": "Spring PDF Tools",
  "Invoke": "Naming Scheme",
  "Run": "General"
}
```

The general run requests user input and returns a name when **"Set File Name"** is selected. The output dictionary targets `"Spring UI"`.

## Version History

### Version 1.1
**Hotfix for Version 1** — Reference: `SID 2024-01-0201`

Fixed a dictionary-saving bug caused by an iOS 18 parser change in the `Set Dictionary Value` action. The `"."` separator for sub-dictionary keys was no longer interpreted as regex, breaking the setup loop. The list-loop and text-prompt-loop modules were rewritten to accommodate the change.

### Version 1.0
**Initial Release** — January 02, 2025

First public release of the Naming Scheme module.
