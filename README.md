# DFD Design System 📐

> **Modular. Tokenized. Scalable.**
> The DFD Design System is a high-performance, variable-first framework currently in **Alpha**. It leverages a strict 3-tier token architecture to provide ultimate flexibility for themes, accessibility, and multi-platform scaling.

[![Figma Design File](https://img.shields.io/badge/Figma-Pre--release%20v0.1.x-F24E1E?style=for-the-badge&logo=figma)](https://www.figma.com/design/HTB64tDNklIDRvZ1VLAFH8/DFD-Design-System?node-id=377-1151&t=fKxkgqapKWWFTDRD-1)
[![Status](https://img.shields.io/badge/Status-Alpha-orange?style=for-the-badge)](https://github.com/DForant/dfd-design-system)

---

## 🏗 Core Architecture: The 3-Tier Variable System

To ensure a "Theme-able" and "Future-proof" system, DFD strictly separates values from intent. All variables must flow through these three layers:

### 1. Primitives (The Ingredients)
* **Collection:** `Primitives`
* **Definition:** Raw hex values and numeric scales. These are "immutable facts."
* **Naming:** `open-color-blue-5`, `brand-hot-dog-pink-3`, `space-10`.
* **Constraint:** Never use Primitives directly in component builds.

### 2. Interim / Themes (The Abstraction)
* **Collection:** `Schemes` or `Themes`
* **Definition:** The bridge that allows mode switching (Light/Dark/Branded). These variables alias to Primitives.
* **Naming:** `scheme-primary`, `scheme-base`, `scheme-accent`.
* **Logic:** This layer contains the mode-specific logic for different aesthetic styles.

### 3. Semantics (The Usage)
* **Collection:** `Semantics`
* **Definition:** Contextual tokens used in the UI. These alias to Interim variables.
* **Naming:** `surface/page`, `action/primary/bg`, `text/secondary`.
* **Logic:** These are the only tokens visible to the end-user in the Figma selection menu.

---

## 📦 Modules

### 🎨 Color Module
Utilizes **Open Color** as the foundation for balanced neutral and hue scales. The system is engineered to support a diverse range of visual identities through a robust multi-mode Interim layer.

* **Foundation:** Mathematically consistent primitive steps for accessibility and contrast control.
* **Thematic Modes:**
    * **Custom:** The default "Brand" entry point for unique configurations.
    * **Cozy & Warm:** (Light/Dark) High-warmth neutrals and soft contrasts for approachable interfaces.
    * **Cool & Industrial:** (Light/Dark) Blue-tinted greys and sharp contrasts for technical or pro-grade tools.
    * **Fun & Vibrant:** (Light/Dark) High-saturation accents and energetic palettes.
    * **Soft & Elegant:** (Light/Dark) Minimalist, low-contrast aesthetics for premium experiences.

### 🔡 Typography Module
* **Root Logic:** `10px Root` (1rem = 10px) for simplified mental conversion.
* **Scale:** Numeric sizing (e.g., `text-12`, `text-16`, `text-24`) to maintain clarity across platforms.
* **Standards:** W3C-aligned line-heights and letter-spacing for optimal legibility.

### 📏 Spacing & Layout
* **Hybrid Grid Logic:** * **Base 10:** Used for layout containers and strict REM alignment.
    * **Base 4:** (4, 8, 12, 16) used for standard UI density and component-level padding.

---

## 🚀 Access & Implementation

### 🛠 Pre-release Access
This system is currently in **Alpha (v0.1.x)**. You can view the live architecture and work-in-progress components here:
👉 **[View Figma Design File](https://www.figma.com/design/HTB64tDNklIDRvZ1VLAFH8/DFD-Design-System?node-id=377-1151&t=fKxkgqapKWWFTDRD-1)**

### For Developers (JSON)
Tokens are structured for compatibility with the **Variables Import** plugin and Style Dictionary.
```json
{
  "semantics": {
    "action": {
      "primary": {
        "bg": "{schemes.primary}",
        "text": "{schemes.on-primary}"
      }
    }
  }
}