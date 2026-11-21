# DFD Design System

**The official, open-source design token architecture and Figma component library for Dean Forant Designs (DFD).**

🔗 **Figma Community File:** [Open DFD Design System in Figma](https://www.figma.com/community/file/1705790305021770388/dfd-design-system)

## 1. Overview

The **DFD Design System** is built on a core philosophy: design systems are not static UI kits—they are distributed software libraries. Engineered to bridge artistic brand direction with production-grade front-end architecture, the system scales across themes, modes, and interfaces without manual re-engineering.

### 3-Tier Token System Architecture

To decouple raw visual values from functional UI intent and enable effortless global theme switching (Light/Dark modes, density, and breakpoints), the system enforces a strict **3-Tier Variable Architecture** using forward-slash (`/`) naming for native Figma folder hierarchy:

| Token Layer | Scope | Naming Convention | Example |
| :--- | :--- | :--- | :--- |
| **Tier 1: Global / Primitive** | Immutable raw visual scales, independent of UI context. | `{category}/{family}/{step}` | `color/graphite/3`, `typography/size/400` |
| **Tier 2: Interim / Theme** | The bridge layer that routes primitives to thematic roles and handles mode switching. | `{scheme}/{role}` | `brand/primary`, `font/size/h1` |
| **Tier 3: Semantic / Alias** | Intent-driven tokens applied directly to UI components. | `{category}/{element}/{property}/{state}` | `color/surface/primary/default`, `typography/button/weight` |

### Core Visual Foundations

* **Color Architecture:** Built on a custom, streamlined **5-step chromatic scale** (anchored at Step `3` as the base, with Steps `1–2` as lighter tints and Steps `4–5` as darker shades) across five core DFD brand palettes:
  * **Gold (`#D4AF37`):** Signature brand anchor for primary focal actions.
  * **Graphite (`#1E222A`):** Deep, cool neutral for dark-mode surfaces and structural panels.
  * **Steel (`#4A90E2`):** Cyber-blue accent for interactive states, links, and focus rings.
  * **Cream (`#F7F5F0`):** Warm, low-glare light-mode canvas.
  * **Obsidian (`#111111`):** High-contrast neutral for primary typography.

* **Typography Strategy:** Powered by the **IBM Plex** superfamily for cohesive technical authority:
  * **Headings (`font/heading`):** `IBM Plex Serif`
  * **Body & UI (`font/body`):** `IBM Plex Sans`
  * **Code & Metadata (`font/code`):** `IBM Plex Mono`

* **Mathematical Foundation:** Locked to a **10px root scale** (`1rem = 10px` via a `62.5%` HTML root font-size) and a strict **4px (`0.4rem`) vertical rhythm sub-grid** for all line heights and spacing.

* **Accessibility Baseline:** Enforces WCAG AA minimum contrast (`4.5:1` for normal text, `3:1` for large text and UI components) and targets WCAG AAA for core body copy.

## 2. How to Use the Design System

### For Designers (Figma)

1. **Duplicate the Library:** Open the [DFD Design System on Figma Community](https://www.figma.com/community/file/1705790305021770388/dfd-design-system) and click **Open in Figma** to duplicate it to your workspace.
2. **Publish Collections:** If using across multiple files, publish the library to your team/organization. Keep `Primitives` hidden from general asset search so designers consume `Interims` and `Semantics`.
3. **Switching Themes (Light / Dark Mode):**
   * Never swap colors manually on individual layers.
   * Select any parent **Frame**, open the **Layer** panel on the right, click the **Change Variable Mode** icon (hexagon), and toggle the `Interims` collection between **Light** and **Dark**.
4. **Binding Typography Variables Correctly:**
   * **Line Height:** Bind `font/line-height/*` Number variables directly; Figma applies them in `px` to preserve the 4px vertical grid.
   * **Tracking (Letter Spacing):** Tracking primitives (`typography/tracking/*`) use proportional percentage values (`-4` through `4`). Before binding a tracking variable to a text layer, manually type `0%` into the Letter Spacing field and press **Enter** to lock the node to percentage math, then bind the variable.
   * **Font Weight:** Weights are calibrated to IBM Plex limits (`Thin` `100` through `Bold` `700`).

### For Developers (Code & Token Sync)

1. **Configure the 10px Rem Base:**
   Set your root HTML font size to `62.5%` so every `1rem` equals `10px`, matching the design system's spatial and typographic math:

   ```css
   html {
     font-size: 62.5%; /* 1rem = 10px */
   }

   body {
     font-size: 1.6rem; /* 16px default body copy */
   }
   ```

2. **Import Design Tokens:**
   The repository stores tokens in W3C Design Token JSON format (`$value`, `$type`, `$description`), compatible with **Style Dictionary** for CSS/SCSS/Tailwind builds and the **Figma Variables Import** plugin for round-trip syncing.

3. **Strict Consumption Rule:**
   Never hardcode raw hex values or static pixel sizes into UI components. Always reference **Tier 3 Semantic** tokens (e.g., `var(--color-surface-primary-default)`) so theme toggling and responsive scaling work automatically.

## 3. Changelog

All notable changes to the **DFD Design System** are documented in this section. This project adheres to [Semantic Versioning](https://semver.org/).

### [0.1.0-alpha] - 2026-11-20

#### Added

* **3-Tier Architecture Specification:** Formalized the `Primitives ➔ Interims ➔ Semantics` variable hierarchy using `/` slash notation for native Figma collection grouping.
* **Tier 1: Color Primitives:** Implemented custom 5-step chromatic scales for the core DFD brand palettes (`gold`, `graphite`, `steel`, `cream`, `obsidian`).
* **Tier 1: Typography Primitives:**
  * Defined IBM Plex font families (`primary`, `secondary`, `mono`).
  * Added 10px-root font size scale (`100` / `10px` through `1000` / `72px`).
  * Added 4px-grid line height scale (`12px` through `80px`).
  * Added proportional tracking scale (`tightest` `-4%` through `widest` `4%`) with Figma-ready tooltips.
  * Added IBM Plex-compliant font weight primitives (`thin` `100` through `bold` `700`).
* **Tier 2: Interim / Theme Layer:**
  * Mapped Light and Dark mode color routing (`brand/primary`, `brand/bg-page`, `brand/bg-surface`, `brand/text-*`, `brand/border-*`).
  * Mapped structural `font/size/*` (including `display-xl` at `72px`) and `font/line-height/*` Interims for future responsive and density modes.
* **Tier 3: Semantic Layer (In Progress):**
  * Defined semantic font-weight tokens (`typography/*/weight`) scoped strictly to Font Weight in Figma.
* **Documentation:** Published initial public Figma Community file and repository `README.md`.

---

*Maintained by **Dean Forant Design (DFD)**. For questions, issues, or contribution guidelines, please open an issue in this repository.*