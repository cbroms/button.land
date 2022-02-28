import path from 'path';
import { readdir, readFile } from 'fs/promises';

import matter from 'gray-matter';
import hljs from 'highlight.js/lib/core';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYVabcdefghijklmnopqrstuvwxyz', 10);
const baseLoc = path.resolve('./src/lib/db/');

export const listButtons = async () => {
  const dir = await readdir(baseLoc);
  return dir;
};

export const getButton = async (buttonLoc) => {
  const parentLoc = path.join(baseLoc, buttonLoc);
  const files = await readdir(parentLoc);
  const buttons = [];
  // there should be a list of .md files, one for each button
  for (const file of files) {
    if (file.indexOf('.md') !== -1) {
      const loc = path.join(parentLoc, file);
      const buttonData = await (await readFile(loc)).toString();

      let { data, content } = matter(buttonData);
      // highlight the html for rendering on the button's page
      const html = hljs.highlightAuto(content).value;
      // to prevent instance of the same button classes repeating, replace
      // each ".btn" class with a random id
      const newClass = nanoid();
      content = content
        .replaceAll('.btn', `.${newClass}`)
        .replaceAll(`class="btn"`, `class="${newClass}"`);
      buttons.push({ data, content, html });
    }
  }
  return { id: buttonLoc.replace('.md', ''), buttons };
};
