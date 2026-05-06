# scripts/

Static-site-side build helpers. Nothing here runs on production — these are
local Node scripts you run manually after content changes.

## `build-brief-pdf.mjs`

Regenerates the two downloadable Brief PDFs the site offers as a download:

| Output | Composition |
|---|---|
| `/Fabian_Spitzer_Brief.pdf` | `/was-unternehmen-bekommen.html` (rendered, light-mode print) — 1 page |
| `/Fabian_Spitzer_Brief_EN.pdf` | `/what-companies-get.html` (rendered, light-mode print) — 1 page |

The CV (`/Fabian_Spitzer.pdf`) is a **separate download** — never merged into
the brief. Both documents stay independent.

### Run

```bash
cd scripts
npm install              # one-time
npm run build-pdf
```

Requires Chromium at `/usr/bin/chromium` (override with `CHROMIUM_PATH=...`).

### When to re-run

- After editing the German or English brief HTML
- After changing the print-mode CSS in either brief page
