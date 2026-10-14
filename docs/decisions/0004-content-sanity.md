# ADR-0004: Manage content in Sanity, starting with local files

- **Status:** Proposed
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations (applies from Iteration 2)

## Context

The studio team needs to add projects, stills, credits and team members without a developer. The developer, however, should not have to set up a CMS before there is anything to show.

## Decision

1. **Iterations 0–1:** content lives in the repository as Markdown/JSON in Astro content collections, with typed schemas.
2. **Iteration 2:** introduce **Sanity** as the headless CMS. Its schemas mirror the content collection schemas, and the collections switch to loading from Sanity. Pages do not change, because they only see the typed collection.

## Options considered

| Option                | Pros                                                                                                                                            | Cons                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Sanity**            | Generous free plan (20 seats, 10k documents, 100 GB assets and bandwidth at the time of writing); flexible schemas; customisable editing studio | Hosted service; the free plan's datasets are public-read only |
| Content in Git only   | Free, simple, versioned                                                                                                                         | Non-developers can't easily edit                              |
| Decap CMS / Keystatic | Git-based editing UI                                                                                                                            | Less polished for media-heavy content                         |
| WordPress (headless)  | Familiar editor                                                                                                                                 | Server to maintain and secure                                 |

## Consequences

- Building pages doesn't wait on CMS setup.
- **Free-plan datasets are publicly readable.** Nothing private goes into Sanity: no enquiries, no client contact details, no draft pricing. Enquiries are handled separately (ADR-0006).
- Each content edit triggers a rebuild through a Sanity webhook to Cloudflare.
- Revisit if the team needs scheduled publishing, private datasets or more seats (Growth plan, per seat per month).
