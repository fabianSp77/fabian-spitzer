# scripts/

Static-site-side build helpers. Nothing here runs on production — these are
local Node scripts you run manually after content changes.

## `build-combined-pdf.mjs`

Regenerates the two combined Brief + CV PDFs the site offers as a download:

| Output | Composition |
|---|---|
| `/Fabian_Spitzer_Brief.pdf` | `/was-unternehmen-bekommen.html` (rendered, light-mode print) → page 1<br>`/Fabian_Spitzer.pdf` → page 2 |
| `/Fabian_Spitzer_Brief_EN.pdf` | `/what-companies-get.html` (rendered, light-mode print) → page 1<br>`/Fabian_Spitzer.pdf` → page 2 |

### Run

```bash
cd scripts
npm install              # one-time
npm run build-pdf
```

Requires Chromium at `/usr/bin/chromium` (override with `CHROMIUM_PATH=...`).

### When to re-run

- After editing the German or English brief HTML
- After replacing the source CV `Fabian_Spitzer.pdf`
- After changing the print-mode CSS in either brief page
