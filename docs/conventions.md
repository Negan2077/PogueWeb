# Conventions

Lightweight rules for a one-person team, so the history stays readable and every change gets reviewed, even if only by you.

## Branches

- `main` is always deployable and always matches production.
- Work happens on short-lived branches named by type and topic:
  - `feat/work-filters`
  - `fix/hero-video-mobile`
  - `docs/adr-0008-analytics`
  - `chore/upgrade-astro`
- One branch per GitHub issue. Delete it after merging.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(work): add discipline filter chips
fix(contact): keep typed values after a validation error
docs(adr): accept 0005 video hosting
chore(deps): update astro to 6.x
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`. The scope is the page or area.

## Pull requests (yes, even solo)

Every change to `main` goes through a pull request because:

- Cloudflare builds a **preview link** you can open on your phone.
- The PR template's checklist is your review.
- The PR description becomes the record of _why_ the change was made.

Merge with **squash**, so each PR is one clean commit on `main`.

## Issues and milestones

- One GitHub **milestone** per iteration (`Iteration 1 — Shell + Home`).
- One **issue** per task in that iteration. Link the PR with `Closes #12`.
- Labels: `feat`, `bug`, `content`, `design`, `docs`, `blocked`.

## Releases

- At the end of each iteration, tag `main` with `v0.<iteration>.0` (e.g. `v0.2.0` after Iteration 2).
- Launch is `v1.0.0`. After launch, follow semantic versioning.
- Update `CHANGELOG.md` before tagging.

## Code

- TypeScript strict mode; no `any` without a comment explaining why.
- Prettier formats; ESLint lints; both run before commit (lint-staged) and in CI.
- Components in `src/components/`, one per file, named in PascalCase.
- Design values come from `src/styles/tokens.css` only; no hard-coded colours in components.
- Secrets only in environment variables. `.env.example` lists every variable with a comment.

## When to write documentation

| Situation                                 | Write                                         |
| ----------------------------------------- | --------------------------------------------- |
| Choosing or changing a tool               | ADR in `docs/decisions/`                      |
| Starting / finishing an iteration         | Plan / review in `docs/iterations/`           |
| Something took over an hour to figure out | A "Learned" entry in the iteration log        |
| A design value changes                    | `docs/design/design-tokens.md` + `tokens.css` |
