# ADR-0006: Enquiry pipeline

- **Status:** Proposed
- **Date:** 2026-10-14
- **Iteration:** 0 — Foundations (applies from Iteration 3)

## Context

The contact form is how the site earns its keep. Per the system flow diagram, a valid enquiry must: alert the studio, send the client an auto-reply, and save the lead, without exposing personal data and without letting spam through.

## Decision

- **Endpoint:** an Astro server action running as a Cloudflare Pages Function. It validates every field again on the server.
- **Spam protection:** Cloudflare Turnstile (invisible challenge) plus a hidden honeypot field.
- **Email:** Resend, sending from a verified studio domain:
  - an alert to the studio inbox, with all fields and attachment links
  - an auto-reply confirming receipt to the client
- **Lead storage:** a private Google Sheet via a service account (simple, free, familiar to the team). **Not** Sanity, because its free datasets are public-read (ADR-0004).
- **Attachments:** uploaded to private storage (Cloudflare R2) and linked in the alert email; never attached directly.
- **Book a call:** Cal.com or Calendly link; no integration needed.

## Options considered

| Option                            | Pros                                                     | Cons                                                                               |
| --------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Own endpoint + Resend + Sheet** | Full control of fields, emails and design; very low cost | We write and maintain the code                                                     |
| Formspree / Basin / Web3Forms     | No backend code                                          | Less control over emails and storage; per-submission limits; data on a third party |
| Email only (mailto)               | Zero code                                                | No validation, no auto-reply, no lead record, spam                                 |

## Consequences

- Resend's free tier (about 3,000 emails/month, 100/day, one domain at the time of writing) far exceeds expected enquiry volume.
- We need: a verified sending domain (SPF/DKIM DNS records), a Google Cloud service account, and secrets stored as Cloudflare environment variables, never in the repository.
- The privacy policy must state what is collected and why.
