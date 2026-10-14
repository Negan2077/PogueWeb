# ADR-0002: Build the site with Astro

- **Status:** Proposed
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations

## Context

The site is mostly content: showreels, project pages, service pages, an About page and a contact form. It must load fast on phones, especially with video, and be maintainable by one developer. Only a few parts are interactive: the Work filters, video players, the contact form and hover previews.

## Decision

Use **Astro 6** with TypeScript (strict mode), on Node.js 22 LTS.

Pages render to static HTML. Interactive parts are small "islands" written in plain TypeScript, and only those load JavaScript. Content is defined with Astro **content collections**, whose schemas type-check every project, team member and service.

## Options considered

| Option              | Pros                                                                                                                                               | Cons                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Astro 6**         | Ships no JavaScript by default; fast pages; content collections with typed schemas; built-in page transitions; adapters for Cloudflare and Netlify | Smaller ecosystem than React frameworks                                                                              |
| Next.js             | Huge ecosystem; React everywhere                                                                                                                   | Heavier JavaScript for a content site; best experience is tied to Vercel hosting (see ADR-0003)                      |
| WordPress / Webflow | Visual editing out of the box                                                                                                                      | Less control over performance and code; ongoing plugin/licence costs; less useful as a portfolio of your engineering |

## Consequences

- Pages are fast by default, which matters most for a video-led site.
- Content schemas catch missing fields (e.g. a project without a year) at build time.
- Astro 6 requires Node 22 or newer; pin the version in `.nvmrc` and `package.json` `engines`.
- Revisit if the site later needs logged-in areas or heavy app-like features.
