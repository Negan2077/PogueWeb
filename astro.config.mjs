// @ts-check
import { defineConfig } from 'astro/config';

// Static output for now. The Cloudflare adapter is added in Iteration 3,
// when the contact form needs a server endpoint (ADR-0003, ADR-0006).
export default defineConfig({
  site: 'https://www.example.com', // TODO: replace with the studio domain before launch
});
