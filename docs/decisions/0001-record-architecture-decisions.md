# ADR-0001: Record architecture decisions

- **Status:** Accepted
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations

## Context

This website is built and maintained by a single developer. Months from now, nobody (including that developer) will remember why a tool was picked or a trade-off was made. Decisions that are hard to reverse need a written record.

## Decision

We keep Architecture Decision Records (ADRs) in `docs/decisions/`, numbered in order, one decision per file, using `0000-template.md`.

Write an ADR when:

- choosing or replacing a framework, service, or paid tool
- changing how content, video, or enquiries flow through the system
- making a trade-off you might later want to undo

ADRs are never deleted. When a decision changes, write a new ADR and mark the old one **Superseded by ADR-NNNN**.

## Consequences

- Every important choice has a short, dated explanation.
- Writing an ADR takes 10–15 minutes; that's the cost.
