# ADR-0008: Pin TypeScript to 6.0

- **Status:** Accepted
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations

## Context

Installing TypeScript without a version brought in TypeScript 7.0, the new native compiler. typescript-eslint 8 only supports TypeScript up to 6.0, because TypeScript 7 does not yet offer the JavaScript API that linters and Astro's checker rely on. With 7.0, `pnpm lint` would crash.

## Decision

Pin `typescript@~6.0.3` in devDependencies (6.0.x patch updates only).

## Options considered

| Option                      | Pros                                      | Cons                                           |
| --------------------------- | ----------------------------------------- | ---------------------------------------------- |
| **TypeScript 6.0 (pinned)** | Works with ESLint and `astro check` today | Misses TypeScript 7's faster compiler for now  |
| TypeScript 7.0              | Much faster type checking                 | Breaks linting; not supported by our tools yet |

## Consequences

- Linting and type checks work.
- Revisit when typescript-eslint and `@astrojs/check` announce TypeScript 7 support (expected around TypeScript 7.1).
