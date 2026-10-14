# Iteration 0 — Foundations

- **Dates:** 2026-10-14 → [end date]
- **Milestone:** Iteration 0 — Foundations
- **Release tag:** `v0.0.0`

## Goal

An empty site, styled with the Silver Screen tokens and Albert Sans, deploying automatically to a preview link, with every key decision written down.

## Scope

**Decisions**

- [ ] Review ADRs 0002–0007; change status to Accepted (or edit and accept)

**Accounts and tools**

- [ ] Node.js 22 LTS + pnpm installed locally
- [ ] GitHub repository created; this docs kit committed as the first commit
- [ ] Cloudflare account; Pages project connected to the repo
- [ ] Bunny account (14-day trial is enough for now)
- [ ] Decide domain and where its DNS lives (moving DNS to Cloudflare simplifies Resend and Turnstile later)

**Project setup**

- [ ] Scaffold Astro 6 with TypeScript strict (`pnpm create astro@latest`)
- [ ] Add `.nvmrc` (22), `engines` in `package.json`, `.editorconfig`
- [ ] Prettier + ESLint (with Astro plugins), lint-staged + pre-commit hook
- [ ] `.env.example` with placeholder variables
- [ ] GitHub: PR template, labels, milestones for Iterations 0–7
- [ ] CI check on pull requests: `pnpm check`, `pnpm lint`, `pnpm build`

**Design foundations**

- [ ] Self-host fonts (Fontsource: Albert Sans variable, JetBrains Mono variable)
- [ ] `src/styles/tokens.css` matching `docs/design/design-tokens.md`
- [ ] `src/styles/global.css`: reset, base typography, focus ring, reduced-motion rules
- [ ] Base layout (`src/layouts/BaseLayout.astro`) with `<html lang>`, meta and font loading
- [ ] Temporary `/styleguide` page showing colours, type scale, buttons and a form field

**Content**

- [ ] Start `docs/content-inventory.md`: list projects, videos, stills, team and copy you have

## Out of scope

- Real pages (Iteration 1), CMS (Iteration 2), form backend (Iteration 3).

## Done when

- The `/styleguide` page is live on a Cloudflare preview link and looks right on a phone.
- Opening a pull request produces a preview link and passing checks automatically.
- ADRs 0002–0007 are Accepted.

## Log

| Date       | Did                                                                                                                                                                       | Blocked by / Learned                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 2026-10-14 | Chose the stack; wrote ADRs 0001–0007 and this docs kit                                                                                                                   | —                                                                                   |
| 2026-10-14 | Wrote starter files: configs (Prettier, ESLint, EditorConfig, CI), `tokens.css`, `global.css`, `BaseLayout`, `Button`, holding page, `/styleguide`; wrote `docs/setup.md` | Files written but not yet installed or built: run `docs/setup.md` steps 2–6 locally |

## Review

- **Shipped:**
- **Not shipped, and why:**
- **What went well:**
- **What to change next iteration:**
- **Decisions made (ADRs):** 0001–0007
- **Carried into next iteration:**
