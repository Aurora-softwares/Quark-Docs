---
title: Common questions
description: Quick answers when something does not work.
---
## Quark doesn't start on Linux
Check that the GTK4/libadwaita development packages from [Install and launch](/Quark-Docs/docs/install/) are installed, and run Quark from a terminal to see the exact error.

## It cannot find Hydrogen
Install Hydrogen separately and ensure `hy` is on PATH, or set `QUARK_HYDROGEN_COMPILER` to the full path of your compiler.

## My interface preview looks different from the built app
The embedded designer is not yet guaranteed to match the native renderer. Save your file and use **Live OS preview**, with a matching Hydrogen `hyui` runtime installed.

## Why is Start Debugging unavailable?
Quark has editor and debug panel groundwork but not a completed source debugger or verified Hydrogen debugger adapter.

## Can I build a Windows app on macOS?
Hydrogen's compiler supports several output targets in development, but Quark's **Start Without Debugging** launches **host** executables only. Cross-platform UI support and acceptance are ongoing.

## Something else is wrong?
Open the [Quark IDE issue tracker](https://github.com/Aurora-softwares/Quark-IDE/issues). Include your operating system, Quark source revision, Hydrogen revision, the action you took, and the first relevant error.
