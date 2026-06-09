---
title: "Spring PDF Tools"
date: "2025-01-02"
description: "Documentation for the ultimate offline PDF manipulation shortcut for iOS, iPadOS, and macOS."
projectOrder: 2
---

**Spring PDF Tools** is an all-in-one offline PDF manipulation shortcut for the Apple ecosystem. It combines four powerful tools into a single modular interface.

> [!NOTE]
> This shortcut processes everything on-device. No data is uploaded to any server.

<cardgrid>
  <card title="Naming Scheme API" href="/docs/spring-pdf-tools/naming-scheme" icon="Tag">
    API reference for the custom file-naming engine
  </card>
  <card title="Make PNG Images from PDF" href="/docs/spring-pdf-tools/make-png" icon="Image">
    Split PDFs into PNGs with resolution control
  </card>
  <card title="Make PDF — Readable or Unreadable" href="/docs/spring-pdf-tools/make-pdf" icon="FileText">
    Preserve or remove selectable text
  </card>
  <card title="Version History" href="/docs/spring-pdf-tools/version-history" icon="Clock">
    Changelog for all releases
  </card>
</cardgrid>

## Tools

- [Naming Scheme](/docs/spring-pdf-tools/naming-scheme) — custom file-naming engine with a verbose API
- [Make PNG Images from PDF](/docs/spring-pdf-tools/make-png) — split PDFs into PNG images with resolution control
- [Make PDF — Readable or Unreadable](/docs/spring-pdf-tools/make-pdf) — preserve or remove selectable text
- [Create PDF from Master ZIP](/docs/spring-pdf-tools/make-pdf#create-pdf-from-master-zip) — automated multi-level PDF assembly

---

## Limitations

| Constraint | Limit |
|---|---|
| Images / objects per session | ~100 |
| Maximum PDF size | ~400 MB |

> [!CAUTION]
> As with all Apple Shortcuts, Spring PDF Tools loads everything into memory. Large files may cause the shortcut to crash.

---

## Update Mechanism

Spring PDF Tools can check for updates via **Swing Updater**. An update option is available directly in the main menu.

If you use a different shortcut updater, register this shortcut manually:

- **Module**: RoutineHub
- **RH ID**: `21134`

---

## Feedback

Found a bug or have a feature request? Reach out on [RoutineHub](https://routinehub.co/user/sugeethjsa) or open an issue on the project repository.
