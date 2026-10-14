# ADR-0003: Host on Cloudflare Pages

- **Status:** Proposed
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations

## Context

We need hosting with automatic preview links for every change (core to the iterative workflow), a small server endpoint for the contact form, and terms that allow a commercial studio website, at little or no cost.

## Decision

Host on **Cloudflare Pages**, connected to the GitHub repository. Every pull request gets its own preview URL; merging to `main` deploys to production. The contact form endpoint runs as a Pages Function through Astro's Cloudflare adapter.

## Options considered

| Option               | Pros                                                                                                                                                                           | Cons                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Cloudflare Pages** | Free tier with unlimited static bandwidth and requests; preview deploys; functions for the form endpoint; DNS, spam protection (Turnstile) and analytics from the same account | Functions have per-request CPU limits (fine for a form)                                              |
| Vercel               | Excellent developer experience                                                                                                                                                 | Hobby (free) plan is for personal, non-commercial use only, so a studio site needs the paid Pro plan |
| Netlify              | Similar features, generous free tier                                                                                                                                           | Bandwidth limits on the free tier matter more for a media-heavy site                                 |

## Consequences

- Hosting cost: free to start.
- Video files are **not** served from here; they go through the video host (ADR-0005). Static files are limited to 25 MiB each anyway.
- Free-tier limits at the time of writing: 500 builds/month; Functions share the Workers free quota of 100,000 requests/day. Re-check the current limits before launch.
- Revisit if build minutes or function limits become a bottleneck.
