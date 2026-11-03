---
title: Design an interface
description: Explore Quark's visual Hydrogen UI designer.
---
Hydrogen interfaces are stored in **`.hyui` XML** files. Open one in Quark and switch between **Design** and **XML Source** under the editor.

The designer shows familiar native controls such as buttons, text inputs, lists, tabs, sliders and switches. Select an item to explore its properties. You can also use the element hierarchy to reach controls that aren't visible on the current tab.

### Check the real native result
Quark's embedded designer is still being aligned with Hydrogen's actual UI renderer. The **Live OS preview** action opens a separate renderer window when the matching `hyui` runtime is installed; use `QUARK_HYUI_RUNTIME` if Quark cannot find it.

Save the XML before opening a separate preview, so that you're comparing against the saved document. **Design-time tab switching** is for previewing only; change **Startup page** to set the application's initial tab.

:::caution[Visual differences]
As of **3 November 2026**, visual alignment, responsive layout and design-time interaction still need real GUI acceptance. A standalone Hydrogen application is the reference for the final appearance. Do not expect exact pixel parity from the embedded designer yet.
:::

Old `.quarkui` JSON files are not the modern Hydrogen UI format. Use `.hyui`.
