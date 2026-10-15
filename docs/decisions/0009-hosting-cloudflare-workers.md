# ADR-0009: Host on Cloudflare Workers (static assets)

- **Status:** Accepted
- **Date:** 2026-10-15
- **Iteration:** 0 — Foundations
- **Supersedes:** ADR-0003

## Context

ADR-0003 chose Cloudflare Pages. When connecting the repository, Cloudflare's dashboard only offered Workers: new projects are now created as Workers, which Cloudflare recommends for new projects. Pages is still supported but no longer offered as a separate option.

## Decision

Deploy the built site (`dist/`) as a Cloudflare Worker with static assets, configured in `wrangler.jsonc`. Workers Builds builds and deploys on every push to `main`; other branches get preview URLs. In Iteration 3, the contact form endpoint becomes a Worker route (via the `@astrojs/cloudflare` adapter) instead of a Pages Function.

## Options considered

| Option                 | Pros                                                                                                        | Cons                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Cloudflare Workers** | Offered by the dashboard; Cloudflare's recommended path; same free tier; form endpoint fits naturally later | One config file and the `wrangler` dev dependency             |
| Cloudflare Pages       | No config file                                                                                              | No longer offered in the dashboard for new projects           |
| Netlify                | Similar features                                                                                            | Moves hosting away from Cloudflare DNS, Turnstile and Workers |

## Consequences

- `wrangler.jsonc` and `wrangler` (dev dependency) are now part of the project; `.wrangler/` is git-ignored.
- `pnpm exec wrangler dev` previews the production build locally at http://localhost:8787.
- The build variable `PNPM_VERSION` in Cloudflare must match the local pnpm version.
- The Worker name in the dashboard must match `"name"` in `wrangler.jsonc`.
