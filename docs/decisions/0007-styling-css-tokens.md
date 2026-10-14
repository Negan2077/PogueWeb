# ADR-0007: Plain CSS with design tokens, self-hosted fonts

- **Status:** Proposed
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations

## Context

The design is bespoke (Silver Screen palette, Albert Sans, outlined headlines) and small enough to style by hand. One developer needs styles that stay readable and consistent.

## Decision

- Write **plain CSS**: one global `tokens.css` of custom properties (colours, type scale, spacing) plus Astro's component-scoped `<style>` blocks.
- **Self-host fonts** with Fontsource packages (`@fontsource-variable/albert-sans`, `@fontsource-variable/jetbrains-mono`) instead of loading from Google Fonts: faster, no third-party request, no privacy notice needed for fonts.
- The token values are documented in `docs/design/design-tokens.md` and must match `src/styles/tokens.css`.

## Options considered

| Option                 | Pros                                                      | Cons                                                   |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| **Plain CSS + tokens** | No build dependency; full control; scoped styles in Astro | More CSS to write by hand                              |
| Tailwind CSS           | Fast to prototype; consistent spacing                     | Markup gets verbose; another tool to learn and upgrade |
| CSS-in-JS              | Co-located styles                                         | Adds JavaScript to a static site                       |

## Consequences

- A colour or font change happens in one file.
- Revisit if the component count grows enough that a utility framework would save real time.
