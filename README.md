# POGUE — Website

The website of [STUDIO NAME], a production house making animation, 2D illustration and films. Video-led, dark "Silver Screen" design, built to turn visitors into enquiries.

## Stack

| Layer     | Choice                                                 | Decision                                                      |
| --------- | ------------------------------------------------------ | ------------------------------------------------------------- |
| Framework | Astro 6 + TypeScript (strict), Node 22 LTS             | [ADR-0002](docs/decisions/0002-framework-astro.md)            |
| Hosting   | Cloudflare Workers (static assets), preview per branch | [ADR-0009](docs/decisions/0009-hosting-cloudflare-workers.md) |
| Content   | Astro content collections → Sanity from Iteration 2    | [ADR-0004](docs/decisions/0004-content-sanity.md)             |
| Video     | Bunny Stream                                           | [ADR-0005](docs/decisions/0005-video-bunny-stream.md)         |
| Enquiries | Astro action + Turnstile + Resend + Google Sheet       | [ADR-0006](docs/decisions/0006-enquiry-pipeline.md)           |
| Styling   | Plain CSS + design tokens, self-hosted fonts           | [ADR-0007](docs/decisions/0007-styling-css-tokens.md)         |

## Getting started

```bash
nvm use            # Node version from .nvmrc (22.x)
pnpm install
pnpm dev           # http://localhost:4321
```

| Script                      | What it does                         |
| --------------------------- | ------------------------------------ |
| `pnpm dev`                  | Local development server             |
| `pnpm build`                | Production build into `dist/`        |
| `pnpm preview`              | Serve the production build locally   |
| `pnpm check`                | Astro type and content-schema checks |
| `pnpm lint` / `pnpm format` | ESLint / Prettier                    |

Secrets (Resend, Turnstile, Google, Sanity tokens) live in `.env` locally and in Cloudflare environment variables in production. See `.env.example`. Never commit `.env`.

## Documentation

Everything about how and why this site is built lives in [`docs/`](docs/README.md):

- **Decisions** — why each tool was chosen (ADRs)
- **Iterations** — the plan, log and review of each iteration
- **Design** — tokens, type and components, matching the design canvas
- **Conventions** — branches, commits, releases

## Status

Current iteration: **0 — Foundations**. See [`docs/iterations/`](docs/iterations/) and [`CHANGELOG.md`](CHANGELOG.md).
