# Design tokens — Silver Screen

Source of truth for the visual design. Mirrors the design canvas and must match `src/styles/tokens.css`.

## Colour

A monochrome palette: the only colour on the page comes from the films and stills.

| Token                    | Value     | Use                                               |
| ------------------------ | --------- | ------------------------------------------------- |
| `--color-bg`             | `#111114` | Page background ("projector black")               |
| `--color-surface`        | `#24242B` | Video/image frames, cards                         |
| `--color-surface-raised` | `#1B1B20` | Panels, inputs, process cards                     |
| `--color-border`         | `#2E2E36` | Hairline dividers                                 |
| `--color-border-strong`  | `#4A4A55` | Card outlines, tags                               |
| `--color-border-input`   | `#6B6B78` | Form fields (meets 3:1 against the background)    |
| `--color-text`           | `#F2EEE6` | Headings, body, primary buttons ("silver screen") |
| `--color-text-muted`     | `#BDB7AC` | Paragraphs, secondary text                        |
| `--color-text-subtle`    | `#A39E95` | Labels, metadata                                  |
| `--color-on-silver`      | `#111114` | Text on silver buttons and bands                  |

**Rules**

- Primary button: silver background, black text. Secondary: 2px silver outline, transparent.
- The silver call-to-action band is the only large inverted area per page.
- Use `--color-text-subtle` for short labels and metadata only, not paragraphs.

## Typography

| Role             | Font           | Weight  | Size (desktop) | Notes                                                              |
| ---------------- | -------------- | ------- | -------------- | ------------------------------------------------------------------ |
| Display          | Albert Sans    | 800     | 80–96px        | Letter-spacing −0.025em; line-height ~0.96                         |
| Outlined display | Albert Sans    | 800     | same           | `color: transparent; -webkit-text-stroke: 1.5px var(--color-text)` |
| H2               | Albert Sans    | 800     | 40px           | −0.01em                                                            |
| H3               | Albert Sans    | 800     | 22–26px        |                                                                    |
| Body large       | Albert Sans    | 400     | 18–19px        | line-height 1.55                                                   |
| Body             | Albert Sans    | 400     | 16–17px        | line-height 1.6                                                    |
| Small            | Albert Sans    | 400–600 | 14–15px        |                                                                    |
| Label            | JetBrains Mono | 400     | 12px           | Uppercase, letter-spacing 0.06em (timecode feel)                   |

Display sizes scale down with `clamp()` on phones (e.g. `clamp(2.75rem, 7vw, 6rem)`).

## Spacing and layout

| Token             | Value                   | Use                   |
| ----------------- | ----------------------- | --------------------- |
| `--container-max` | `1280px`                | Content width         |
| `--gutter`        | `40px` (16px on phones) | Side padding          |
| `--section-gap`   | `96px` (64px on phones) | Between page sections |
| `--grid-gap`      | `24px`                  | Card grids            |
| `--grid-gap-lg`   | `32px`                  | Project grid rows     |

## Components (from the wireframes)

- **Header:** logo, Work · Services · Studio · Contact, "Start a project" outline button. Current page underlined.
- **Project card:** 16:10 still → muted preview on hover/focus; title (800); mono metadata `Client · Discipline · Year`.
- **Filter chips:** 44px tall; active = silver fill; `aria-pressed`.
- **Video player:** poster frame, large silver play button, controls bar (play, time, seek, CC, mute, full screen), cut switcher.
- **CTA band:** silver background, black heading and black button.
- **Form fields:** 52px tall, `--color-surface-raised` fill, `--color-border-input` border, visible labels.

## Accessibility baseline

- Text contrast ≥ 4.5:1 (all text tokens above pass on `--color-bg`).
- Touch targets ≥ 44px.
- Visible focus ring: 2px `--color-text` outline, 3px offset.
- Videos: muted autoplay only for previews/hero; full films never autoplay; captions available.
- Respect `prefers-reduced-motion`: replace hover previews and transitions with stills/fades.
