---
title: "Spring PDF Tools — Version History"
date: "2025-01-02"
description: "Version history of Spring PDF Tools."
pageOrder: 4
---

### Version 1.1 (Hotfix)
**Released January 02, 2025** — Reference: `SID 2024-01-0201`

- Fixed a bug in the Naming Scheme module where dictionaries could not be saved in the intended format.
- **Root cause**: iOS 18 changed how the `Set Dictionary Value` action parses the `"."` separator in keys. The regex-based `"xxx.yyy"` sub-dictionary notation was no longer recognised, breaking the setup loop.
- **Fix**: Overhauled the list-loop and text-prompt-loop in the setup module to work around the parser change.

### Version 1.0 (Initial Release)
**Released January 02, 2025**

- Initial release with all four tools.
