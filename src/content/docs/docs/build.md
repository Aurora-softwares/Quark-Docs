---
title: Build and run
description: Connect Hydrogen and launch an application.
---
Quark is an IDE; **Hydrogen is the compiler**. Install the Hydrogen compiler separately from its [source repository](https://github.com/Aurora-softwares/Hylang-Compiler).

Quark looks for the `hy` command on your PATH. Alternatively, point `QUARK_HYDROGEN_COMPILER` at your compiler executable.

```sh
# Example for Linux/macOS shells:
export QUARK_HYDROGEN_COMPILER=/absolute/path/to/hy
cargo run --release --bin quark-native
```

1. Open the correct Hydrogen project (`.hyproj`).
2. Choose **Build Solution** to compile it. Quark displays the tool's progress in **Output**.
3. Choose **Start Without Debugging** to build and launch an executable on **your current operating system**.
4. Use the **Terminal** when you need to run your own commands.

Quark places generated build files in a project's `.quark/build` directory. **Bundle / Publish Binaries** builds first and, for supported single-file outputs, produces a ZIP under `.quark/publish`.

:::caution[Important limitations]
**Start Debugging** is not a working source-level debugger yet. **Run Without Debugging** is different. Native UI execution also requires a Hydrogen build with its matching HYUI runtime. OS images, libraries and binaries for a different host are not directly runnable from this button.
:::

If the build fails, open **Output** and look for the first error. See [Common questions](/Quark-Docs/docs/help/).
