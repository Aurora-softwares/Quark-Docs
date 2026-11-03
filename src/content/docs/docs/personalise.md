---
title: Themes and extensions
description: Make Quark your own.
---
Quark's development source includes four themes: **Graphite**, **Aurora**, **Dawn** and **High Contrast**. Use the **Themes** view to find and customise them.

![Theme options in a Quark development build](/Quark-Docs/images/quark-theme-options.png)

*This is an earlier development screenshot; the native frontend may use different controls.*

## Add an extension
Quark's extensions use local `plugin.json` files to describe commands. They are **not** VS Code VSIX packages.

Use the extensions interface to discover your plugin folder, put an extension in its own subdirectory, and **Reload**. Actions you explicitly run send output to the **Output** panel.

:::caution
Extensions launch local programs with **your user permissions**. Only install tools you trust. The online catalogue and automatic downloading are not yet a complete marketplace.
:::

![Quark extension catalogue screenshot](/Quark-Docs/images/quark-extensions.png)

*Development-era screenshot.*
