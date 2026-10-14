# Documentation

How this website is built, and why. Kept in the repository so it changes alongside the code.

| Folder / file                                        | What's in it                                                       | Update it when…                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| [`decisions/`](decisions/)                           | Architecture Decision Records (ADRs)                               | you choose, change or drop a tool or approach            |
| [`iterations/`](iterations/)                         | One file per iteration: plan, daily log, review                    | you start, work on, or finish an iteration               |
| [`design/design-tokens.md`](design/design-tokens.md) | Colours, type, spacing, components                                 | the design changes (and `src/styles/tokens.css` with it) |
| [`content-inventory.md`](content-inventory.md)       | Every project, photo, and piece of copy, and its status            | content arrives or is approved                           |
| [`conventions.md`](conventions.md)                   | Branches, commits, pull requests, releases                         | the way you work changes                                 |
| [`setup.md`](setup.md)                               | Step-by-step project setup, from empty machine to deployed preview | the setup process changes                                |
| [`../CHANGELOG.md`](../CHANGELOG.md)                 | What shipped in each release                                       | at the end of each iteration                             |

## The working loop

```
Iteration plan  →  issue  →  branch  →  pull request (preview link)  →  merge
      ↑                                                                  │
      └──── iteration review  ←  CHANGELOG + tag  ←  all tasks done  ←───┘
```

1. **Start an iteration:** copy `iterations/_template.md`, fill in the goal, scope and "done when".
2. **Each task:** a GitHub issue → a short-lived branch → a pull request. The PR checklist and Cloudflare preview link are your self-review.
3. **While working:** add a line or two to the iteration's log each day: what you did, what blocked you, what you learned.
4. **Finish an iteration:** tick "done when", write the review, update `CHANGELOG.md`, tag the release (`v0.N.0`).

## Design references

- Design canvas (wireframes, palette, type, system flow): [link to the canvas]
- Implementation plan: `Website_Implementation_Plan.docx`
