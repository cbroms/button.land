import { listButtons } from '../lib/db.js';
import Puppeteer from 'puppeteer';
import fs from 'fs';

// script to save preview images for each of the buttons
// assumes the dev server is running at port 3000

(async () => {
  if (!fs.existsSync('static/social')) fs.mkdirSync('static/social');

  const buttons = await listButtons();
  const browser = await Puppeteer.launch();

  for (const button of buttons) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1250,
      height: 540
    });
    await page.goto(`http://127.0.0.1:3000/button/${button}`);
    await page.screenshot({ path: `static/social/${button}.png` });
    await page.close();
  }

  await browser.close();
})();
