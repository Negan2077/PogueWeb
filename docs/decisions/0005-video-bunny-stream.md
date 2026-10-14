# ADR-0005: Host video on Bunny Stream

- **Status:** Proposed
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations (applies from Iteration 1)

## Context

Video is the product the studio sells. The site needs a showreel, full films with adaptive quality (so phones on slow connections still play smoothly), short muted hover previews, and a player we can style to the Silver Screen design, all at a cost that stays low as the portfolio grows to dozens of films.

## Decision

Use **Bunny Stream** for all video: the showreel, full films and preview loops. Each project in the CMS stores a Bunny video ID; the site's own player component loads the adaptive stream.

## Options considered

| Option           | Pros                                                                                                                        | Cons                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Bunny Stream** | Pay-as-you-go from about $0.01/GB storage and $0.005/GB delivery; free encoding; $1/month minimum; global CDN; 14-day trial | Less polished developer tooling than Mux                                       |
| Mux              | Excellent APIs and player; great analytics                                                                                  | Free tier limited to 10 stored videos; costs grow faster for a large portfolio |
| Vimeo            | Familiar to clients; easy uploads                                                                                           | Plans have changed often; branding and player control depend on tier           |
| YouTube embeds   | Free                                                                                                                        | Ads, related videos and YouTube branding inside your portfolio                 |

## Consequences

- Very low running cost for a portfolio-sized library; prices quoted were checked October 2026.
- We build and own the player UI (controls, captions, cut switcher) as shown in the wireframes.
- Captions files (VTT) are uploaded per film for accessibility.
- Revisit if we need detailed viewer analytics or live streaming (Mux).
