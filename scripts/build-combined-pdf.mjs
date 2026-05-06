#!/usr/bin/env node
/**
 * build-combined-pdf.mjs
 *
 * Renders /was-unternehmen-bekommen.html + /what-companies-get.html to PDF
 * (light-mode print CSS, A4) and appends Fabian_Spitzer.pdf to each, producing:
 *
 *   /Fabian_Spitzer_Brief.pdf      (DE)  Brief page 1 + CV page 2
 *   /Fabian_Spitzer_Brief_EN.pdf   (EN)  same, English brief
 *
 * Run after editing the brief content or replacing Fabian_Spitzer.pdf.
 *
 * Setup (once):
 *   npm install puppeteer-core pdf-lib
 *
 * Run:
 *   node scripts/build-combined-pdf.mjs
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

// 1. Start a local HTTP server serving the repo so puppeteer can fetch
//    /styles.css, /fonts.css, /shared.js, /fonts/*.woff2 etc.
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

  const cvBytes = fs.readFileSync(path.join(REPO, 'Fabian_Spitzer.pdf'));

  const targets = [
    {
      url: `http://127.0.0.1:${PORT}/was-unternehmen-bekommen.html`,
      out: path.join(REPO, 'Fabian_Spitzer_Brief.pdf'),
      label: 'DE',
      title: 'Fabian Spitzer — Was Unternehmen bekommen + CV'
    },
    {
      url: `http://127.0.0.1:${PORT}/what-companies-get.html`,
      out: path.join(REPO, 'Fabian_Spitzer_Brief_EN.pdf'),
      label: 'EN',
      title: 'Fabian Spitzer — What companies get + CV'
    }
  ];

  for (const t of targets) {
    const page = await browser.newPage();
    await page.goto(t.url, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('print');
    await new Promise(r => setTimeout(r, 800));
    // Force-show reveal-on-scroll elements that may not have triggered headless
    await page.evaluate(() => document.querySelectorAll('.r').forEach(el => el.classList.add('v')));
    await new Promise(r => setTimeout(r, 400));

    const briefBytes = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true
    });

    const merged = await PDFDocument.create();
    const briefDoc = await PDFDocument.load(briefBytes);
    const cvDoc = await PDFDocument.load(cvBytes);
    const briefPages = await merged.copyPages(briefDoc, briefDoc.getPageIndices());
    briefPages.forEach(p => merged.addPage(p));
    const cvPages = await merged.copyPages(cvDoc, cvDoc.getPageIndices());
    cvPages.forEach(p => merged.addPage(p));

    merged.setTitle(t.title);
    merged.setAuthor('Fabian Spitzer');
    merged.setSubject('Senior Operations Executive · Brief + CV');
    merged.setKeywords(['COO', 'Interim COO', 'Operations', 'AI', 'Berlin', 'Fabian Spitzer']);
    merged.setProducer('build-combined-pdf.mjs');

    const finalBytes = await merged.save();
    fs.writeFileSync(t.out, finalBytes);
    const reload = await PDFDocument.load(finalBytes);
    console.log(`${t.label}: ${path.relative(REPO, t.out)} — ${(finalBytes.length / 1024).toFixed(1)} KB · ${reload.getPageCount()} pages`);

    await page.close();
  }

  await browser.close();
} finally {
  server.kill();
}
