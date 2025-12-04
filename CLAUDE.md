# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server (astro dev)
npm run build      # Production build (astro build)
npm run preview    # Preview production build locally
```

## Architecture

This is an Astro 5 static site for Phil Cunliffe's personal website/digital garden. It uses MDX for content and native Astro scoped CSS for styling.

### Content Structure
- `src/content/garden/` - MDX content files (notes, essays, highlights)
  - Wiki-style `[[double bracket links]]` are supported via custom remark plugin
  - Frontmatter defines metadata (title, stage, publish, note-type, etc.)
- `src/content/config.ts` - Content Collection schema definition
- `src/pages/garden/[...slug].astro` - Dynamic page generation from content collection

### Key Configuration
- `astro.config.mjs` - Astro configuration
  - MDX integration
  - Shiki for code syntax highlighting (theme: one-dark-pro)
  - Custom wiki-links remark plugin
  - Google Fonts: Londrina Shadow, Koh Santepheap, Quicksand (via CSS @import)

### Styling
- `src/styles/global.css` - Global CSS variables and reset
  - Fluid typography using CSS clamp (step--2 through step-8)
  - Fluid spacing (space-3xs through space-3xl)
  - 12-column grid system via `.u-grid` and `.u-container` utilities
  - Color palette: jade (accent), desire (accent), arrow-rock (accent), void (neutral), mud-brown (neutral)
  - View Transitions animations
- All components use Astro's scoped `<style>` blocks

### Component Patterns
- `src/layouts/BaseLayout.astro` - Main layout with global styles, Header (optional), Footer, SEO, ViewTransitions
- `src/layouts/GardenLayout.astro` - Reading layout for garden posts (72ch max-width, drop cap)
- `src/components/SEO.astro` - Meta tags component
- Section components (`EssaysSection.astro`, `NoteSection.astro`, `HighlightSection.astro`) handle content listing
- Card components (`Note.astro`, `Essay.astro`, `Highlight.astro`) for individual items

### Utilities
- `src/utils/remark-wiki-links.ts` - Custom remark plugin for [[wiki links]]
- `src/utils/time-ago.ts` - Human-readable relative time formatting
