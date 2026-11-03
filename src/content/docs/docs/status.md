---
title: Development status
description: What works today, and what still needs verification.
---
**Last reviewed: 3 November 2026**, based on the Quark-IDE **Development** branch.

Quark's current development version is **0.6.0**. It is **not** a declaration of a fully qualified binary release.

| Feature | Status |
| --- | --- |
| Native start window and IDE shell | 🟡 Implemented; all-host interaction acceptance pending |
| Project editing and Build/Run workflow | 🟡 Implemented in development; native packaged UI runs need verification |
| Resizable native panes | 🟡 Present; docking, floating and persistence parity pending |
| Hydrogen `.hyui` designer and XML source | 🟡 Available; visual/interaction parity pending |
| Interactive terminal and Output | 🟡 Present; Windows/macOS interaction validation pending |
| Source-level debugger | 🔴 Not implemented |
| Qualified Linux/macOS/Windows binary release | 🔴 Not yet certified |

A previous CI checkpoint passed six jobs across Linux, Windows and macOS. **The latest designer changes still need fresh CI and real visual acceptance**. Automated builds are not proof that the entire graphical interface works.

Track progress in the [native frontend status file](https://github.com/Aurora-softwares/Quark-IDE/blob/Development/docs/NATIVE_FRONTEND_STATUS.md), [issue tracker](https://github.com/Aurora-softwares/Quark-IDE/issues), and [Development branch](https://github.com/Aurora-softwares/Quark-IDE/tree/Development).

Documentation is updated manually; it does **not** automatically follow every compiler or IDE commit. When in doubt, the Development source and its status file are authoritative.
