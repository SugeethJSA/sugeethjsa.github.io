---
title: "Apple Shortcuts Tips"
date: "2024-01-01"
description: "Tips, tricks, and essential references for Apple Shortcuts power users."
pageOrder: 3
---

A collection of tips and external references for getting the most out of the Apple Shortcuts app.

## Getting Started

- **Think modular** — break complex automations into smaller sub-shortcuts
- **Use dictionaries** — pass structured data between shortcuts instead of multiple separate variables
- **Name your variables** — clear naming saves hours of debugging later
- **Test incrementally** — build one action at a time and test before adding the next

## Essential External References

- [Action Directory](https://matthewcassinelli.com/actions) by Matthew Cassinelli — searchable database of every Shortcuts action
- [Siri Shortcuts Field Guide](https://matthewcassinelli.com/siri-shortcuts-field-guide/) — comprehensive video course
- [Variable types used in Shortcuts on iPhone or iPad](https://support.apple.com/en-in/guide/shortcuts/apd21791e7f7/ios) — Apple's official documentation

## Common Pitfalls

| Issue | Solution |
|---|---|
| Shortcut crashes on large files | Apple Shortcuts loads everything into memory. Keep file sizes reasonable. |
| Dictionary not saving correctly | iOS 18 changed how `Set Dictionary Value` parses the `"."` separator. Use explicit keys instead. |
| Automation doesn't trigger | Check that the automation trigger has permission to run without confirmation. |

## Publishing on RoutineHub

When publishing shortcuts on RoutineHub, follow these best practices:

- Add clear screenshots showing the shortcut's interface
- Write a detailed description covering each feature
- Include version history in the description
- Use the **Swing Updater** or **HSAG Ultimate Updater** for built-in update checks
