import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Read each blog post's updatedDate (or pubDate) so the sitemap carries real lastmod values.
const BLOG_DIR = './src/content/blog';
const postDates = {};
for (const file of fs.readdirSync(BLOG_DIR)) {
  if (!file.endsWith('.md')) continue;
  const fm = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8').split('---')[1] || '';
  const pick = (key) => (fm.match(new RegExp(`^${key}:\\s*["']?([0-9-]+)`, 'm')) || [])[1];
  const d = pick('updatedDate') || pick('pubDate');
  if (d) postDates[file.replace(/\.md$/, '')] = new Date(d);
}
const newest = new Date(Math.max(...Object.values(postDates).map((d) => d.getTime())));

export default defineConfig({
  site: 'https://minibrainsplay.com.au',
  integrations: [
    sitemap({
      serialize(item) {
        const p = new URL(item.url).pathname;
        const m = p.match(/^\/blog\/([^/]+)\/$/);
        if (m && postDates[m[1]]) item.lastmod = postDates[m[1]].toISOString();
        else if (p === '/' || p === '/blog/') item.lastmod = newest.toISOString();
        return item;
      },
    }),
  ],
});
