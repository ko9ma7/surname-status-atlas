import { cp, mkdir, rm, copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const dist = resolve(root, 'dist');
const placeholder = 'https://USERNAME.github.io/REPOSITORY/';
const siteUrl = (process.env.SITE_URL || placeholder).replace(/\/?$/, '/');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await copyFile(resolve(root, 'index.html'), resolve(dist, 'index.html'));
await cp(resolve(root, 'src'), resolve(dist, 'src'), { recursive: true });
await cp(resolve(root, 'public'), dist, { recursive: true });

for (const relative of ['index.html', 'robots.txt', 'sitemap.xml']) {
  const file = resolve(dist, relative);
  const content = await readFile(file, 'utf8');
  await writeFile(file, content.replaceAll(placeholder, siteUrl));
}

console.log(`Built static site to dist/ (SITE_URL=${siteUrl})`);
