import path from 'path';
import { readdir, readFile } from 'fs/promises';

import matter from 'gray-matter';
import hljs from 'highlight.js';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYVabcdefghijklmnopqrstuvwxyz', 10);
const baseLoc = path.resolve('./src/lib/db/');

export const listButtons = async () => {
  const dir = await readdir(baseLoc);

  // sort with most recent on top
  dir.sort((a, b) => {
    const dateA = new Date(a.split('-').slice(0, 3).join('-'));
    const dateB = new Date(b.split('-').slice(0, 3).join('-'));
    return dateB - dateA;
  });

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

      let { data, content } = { ...matter(buttonData) };
      // highlight the html for rendering on the button's page
      const html = hljs.highlight(content, { language: 'html' }).value;
      // to prevent instance of the same button classes repeating, replace
      // each ".btn" class with a random id
      const newClass = nanoid();
      content = content.replaceAll('btn', `${newClass}`);

      // parse out the colors
      // https://gist.github.com/olmokramer/82ccce673f86db7cda5e?permalink_comment_id=2243862#gistcomment-2243862
      const colorReg = new RegExp(
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi
      );

      let colors = [...content.matchAll(colorReg)];
      colors = [...new Set(colors.map((c) => c[0]))];

      data.properties.colors = colors;

      buttons.push({ data, content, html });
    }
  }
  return { id: buttonLoc.replace('.md', ''), buttons };
};
