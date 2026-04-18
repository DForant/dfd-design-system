# Changelog

## [Unreleased]
### Planned
- Build "Molecules" (Wave 2) components including Form Groups and Alerts.
- Create Sticker Sheet for "Atoms".

---

## [0.1.0] - 2025-12-23

### Added
- **Foundations:** Established the 10px Rem scale (`1rem = 10px`) for all spacing variables.
- **Primitives:** Imported Open Color library (0-9 scales) into the `Primitives` variable collection.
- **Brand Colors:** Added three custom color schemes, each with a 5 step chromatic scale.
  - Palette 1 - Cozy & Rustic: This pallete works well with Pubs, Brewerys, Craft studios, and any other business that is looking for that outdoorsy country feel
  - Palette 2 - Fun & Playful: This palette works well with fast food restaurants, pet care, child care, dance studio or any other business that is looking for a fun vibe
  - Palette 2 - Soft & elegent: This palette works well with Beatuy and helthcare prodcts or services, Fashion, Photo or art studio, or any business that is looking for a soft feel.   
- **Typography:** Generated Text Styles (H1-H4, Body, Utility) linked to number variables.
- **Semantics:** Created semantic alias mappings for:
  - `Action/Primary` -> `oc-indigo-6`
  - `Status/Error` -> `oc-red-7`
  - `gap/xs`        -> `space-4`
  - `padding/button-x`  -> `space-12`


### Changed
- N/A

### Fixed
- N/A


## 🚀 v0.1.1 — The Color Module Definition
**April 6th 2026**

This release marks the transition from a 2-tier to a 3-Tier Variable Architecture, enabling advanced theming and the new Playground module.

✨ New Features

3-Tier Variable Logic: Added the "Interim/Themes" layer to allow for instant mode-switching between brand identities.
Open Color Integration: Rebuilt the Primitive collection using the Open Color standard for better accessibility and hue-grading.
Added 4 unique color moods each mood has total of 4 color palettes.
Fun & Vibrant - A high-energy, high-contrast scheme engineered for engagement in creative, gamified, or "Edutech" platforms.
Warm & Cozy -  An approachable palette of ambers and earth tones designed for community, wellness, and lifestyle-driven interfaces.
Cool & Industrial - A stable, slate-based palette optimized for data-heavy SaaS, FinTech, and professional enterprise tools.
Soft & Elegant - A sophisticated, low-saturation scheme tailored for luxury editorial content and minimalist e-commerce experiences.

 
🎨 Color Module

Added an Interim color tier that Introduced a total of 9 color modes.
Custom 
Warm & Cozy Light Mode
Warm & Cozy Dark Mode
Fun & Vibrant Light Mode
Fun & Vibrant Dark Mode
Cool & Industrial Light Mode
Cool & Industrial Dark Mode
Soft & Elegant Light Mode
Soft & Elegant Dark Mode
Created the core  3 tier architecture by mapping semantic values to the appropriate Interim value 

⚡ Improvements & Fixes

Fixed: Contrast ratios on text-secondary for Dark Mode.
Updated: Naming convention for all tokens to strict kebab-case.
Refinement: Spacing tokens adjusted to 10px root alignment.




⚠️ Known Issues
Semantic mapping only 60% complete
Testing/Playground still needs to be created
Typography needs to be redefined
Spacing and Padding needs to be defined
Line Height values need to be reassessed