# Setup guide — Iteration 0

Exactly how this project was set up, step by step, so it can be repeated on a new machine or by a future developer. Tick each step and note anything that went differently in the iteration log.

> Dashboard labels (GitHub, Cloudflare) change over time; if a name differs slightly, look for the closest match.

## 1. Prerequisites

```bash
nvm install 22 && nvm use 22      # Node 22 LTS (Astro 6 needs Node 22+)
corepack enable                   # gives you pnpm
```

## 2. Create the Astro project

```bash
pnpm create astro@latest studio-website
```

Answer the prompts: **minimal / empty** template, **install dependencies: yes**, **initialise git: yes**.

Then:

```bash
cd studio-website
corepack use pnpm@latest          # records "packageManager" in package.json (CI needs it)
```

Check that `tsconfig.json` extends `"astro/tsconfigs/strict"`; change it if not.

## 3. Add the docs kit and starter files

Unzip the kit **over** the new project and allow it to overwrite:

- `README.md`, `astro.config.mjs`, `src/pages/index.astro`, `.gitignore`, `public/favicon.svg`

Keep the generated `package.json`, `pnpm-lock.yaml` and `tsconfig.json`.

## 4. Install dependencies

```bash
# Fonts (self-hosted, ADR-0007)
pnpm add @fontsource-variable/albert-sans @fontsource-variable/jetbrains-mono

# Tooling
pnpm add -D @astrojs/check typescript \
  prettier prettier-plugin-astro \
  eslint @eslint/js typescript-eslint eslint-plugin-astro \
  lint-staged simple-git-hooks
```

If pnpm warns that build scripts were ignored (e.g. `esbuild`, `sharp`), run `pnpm approve-builds` and approve them.

## 5. Add scripts and hooks to `package.json`

Replace the `"scripts"` block and add the other three blocks:

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
},
"engines": {
  "node": ">=22"
},
"simple-git-hooks": {
  "pre-commit": "pnpm exec lint-staged"
},
"lint-staged": {
  "*.{js,mjs,ts,astro}": ["eslint --fix", "prettier --write"],
  "*.{css,json,md,yml}": "prettier --write"
}
```

Activate the git hook:

```bash
pnpm exec simple-git-hooks
```

## 6. Run it locally

```bash
cp .env.example .env
pnpm dev
```

Open <http://localhost:4321> (holding page) and <http://localhost:4321/styleguide>. Check the styleguide at phone width too (browser dev tools → device toolbar).

Then run every check CI will run:

```bash
pnpm format          # first run only: formats the generated files
pnpm check && pnpm lint && pnpm format:check && pnpm build
```

All four must pass before the first commit.

## 7. First commit and GitHub repository

```bash
git add -A
git commit -m "chore: scaffold Astro project and docs kit"
gh repo create studio-website --private --source=. --push
```

(Or create the repository on github.com and push to it.)

On GitHub:

- **Labels:** `feat`, `bug`, `content`, `design`, `docs`, `blocked`
- **Milestones:** one per iteration, `Iteration 0 — Foundations` … `Iteration 7 — Launch`
- **Branch protection** for `main` (Settings → Branches): require a pull request and the `CI / check` status check

## 8. Connect Cloudflare Pages

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, then pick the repository.

| Setting                | Value                 |
| ---------------------- | --------------------- |
| Production branch      | `main`                |
| Framework preset       | Astro                 |
| Build command          | `pnpm build`          |
| Build output directory | `dist`                |
| Environment variable   | `NODE_VERSION` = `22` |

Save and deploy. You get a production URL (`*.pages.dev`), and every pull request gets its own preview URL.

## 9. Test the whole loop (and accept the ADRs)

This first pull request proves the workflow works end to end:

```bash
git switch -c docs/accept-adrs
# In docs/decisions/0002–0007, change "Status: Proposed" to "Status: Accepted"
git commit -am "docs(adr): accept stack decisions 0002-0007"
git push -u origin docs/accept-adrs
gh pr create --fill
```

Check that:

- [ ] CI runs and passes on the pull request
- [ ] Cloudflare posts a preview link
- [ ] The preview's `/styleguide` looks right on your phone
- [ ] Squash-merge, and production updates

When all four are ticked, Iteration 0's "done when" is met. Write the review in `docs/iterations/iteration-00-foundations.md`, update `CHANGELOG.md`, and tag the release:

```bash
git switch main && git pull
git tag v0.0.0 && git push --tags
```
