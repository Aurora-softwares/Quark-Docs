---
title: Install and launch
description: Run Quark from source on your own computer.
---
Quark is under active development. For now, the reliable route is to **build from source**, rather than assume a downloadable installer is ready.

## You'll need
- Git, Rust and Cargo.
- A compiler toolchain for your operating system.
- The Hydrogen compiler separately, if you want to build Hydrogen projects.

Clone the [Quark IDE repository](https://github.com/Aurora-softwares/Quark-IDE) and switch to `Development`:

```sh
git clone -b Development https://github.com/Aurora-softwares/Quark-IDE.git
cd Quark-IDE
cargo run --release --bin quark-native
```

### Linux (Ubuntu or Debian)
Before running Cargo, install the GTK development libraries:

```sh
sudo apt install build-essential pkg-config libgtk-4-dev libadwaita-1-dev libxkbcommon-dev libwayland-dev libx11-dev libxcursor-dev libxi-dev libxrandr-dev libgl1-mesa-dev
```

### macOS
Install Xcode Command Line Tools (`xcode-select --install`) and Rust. The native frontend uses AppKit, but real macOS interaction testing is still in progress.

### Windows
Install the MSVC Rust toolchain, Visual Studio C++ Build Tools and compatible Windows App SDK requirements. Quark's native frontend targets WinUI 3. Cross-platform CI builds do **not** mean all GUI interactions have been accepted.

:::tip[What about downloads?]
Check the [GitHub releases page](https://github.com/Aurora-softwares/Quark-IDE/releases) for actual published packages. A development version number is not a released or fully tested installer.
:::
