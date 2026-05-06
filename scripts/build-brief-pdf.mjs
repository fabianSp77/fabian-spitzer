#!/usr/bin/env node
/**
 * build-brief-pdf.mjs
 *
 * Renders /was-unternehmen-bekommen.html + /what-companies-get.html to PDF
 * (light-mode print CSS, A4) and writes them to:
 *
 *   /Fabian_Spitzer_Brief.pdf      (DE)  Brief only, 1 page
 *   /Fabian_Spitzer_Brief_EN.pdf   (EN)  Brief only, 1 page
 *
 * The CV is a separate download (/Fabian_Spitzer.pdf) — never merged here.
 *
 * Setup (once):
 *   npm install puppeteer-core pdf-lib
 *
 * Run:
 *   node scripts/build-brief-pdf.mjs
 *
 * Requires Chromium installed at /usr/bin/chromium (Linux) or adjust
 * CHROMIUM_PATH below.
 */

import puppeteer from 'puppeteer-core';
import { PDFDocument } from 'pdf-lib';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const CHROMIUM_PATH = process.env.CHROMIUM_PATH || '/usr/bin/chromium';
const PORT = 8765;

const server = spawn('python3', ['-m', 'http.server', String(PORT), '--directory', REPO], {
  stdio: 'ignore',
  detached: false
});
await new Promise(r => setTimeout(r, 1500));

try {
  const browser = await puppeteer.launch({
    executablePath: CHROMIUM_PATH,
    args: ['--no-sandbox', '--disable-gpu'],
    headless: 'new'
  });

  const targets = [
    {
      url: `http://127.0.0.1:${PORT}/was-unternehmen-bekommen.html`,
      out: path.join(REPO, 'Fabian_Spitzer_Brief.pdf'),
      label: 'DE',
      title: 'Fabian Spitzer — Was Unternehmen bekommen'
    },
    {
      url: `http://127.0.0.1:${PORT}/what-companies-get.html`,
      out: path.join(REPO, 'Fabian_Spitzer_Brief_EN.pdf'),
      label: 'EN',
      title: 'Fabian Spitzer — What companies get'
    }
  ];

  for (const t of targets) {
    const page = await browser.newPage();
    await page.goto(t.url, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('print');
    await new Promise(r => setTimeout(r, 800));
    await page.evaluate(() => document.querySelectorAll('.r').forEach(el => el.classList.add('v')));
    await new Promise(r => setTimeout(r, 400));

    const briefBytes = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true
    });

    // Re-load via pdf-lib only to set metadata (no merging)
    const doc = await PDFDocument.load(briefBytes);
    doc.setTitle(t.title);
    doc.setAuthor('Fabian Spitzer');
    doc.setSubject('Senior Operations Executive · 1-page brief');
    doc.setKeywords(['COO', 'Interim COO', 'Operations', 'AI', 'Berlin', 'Fabian Spitzer']);
    doc.setProducer('build-brief-pdf.mjs');

    const finalBytes = await doc.save();
    fs.writeFileSync(t.out, finalBytes);
    const reload = await PDFDocument.load(finalBytes);
    console.log(`${t.label}: ${path.relative(REPO, t.out)} — ${(finalBytes.length / 1024).toFixed(1)} KB · ${reload.getPageCount()} pages`);

    await page.close();
  }

  await browser.close();
} finally {
  server.kill();
}
