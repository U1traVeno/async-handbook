import { cp, mkdir, readdir, rename, stat } from 'node:fs/promises';
import { join, extname, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, '.vitepress', 'dist', 'raw');

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, join(dest, entry.name));
    } else if (entry.isFile() && extname(entry.name) === '.md') {
      const destName = entry.name === 'README.md' ? 'index.md' : entry.name;
      await cp(srcPath, join(dest, destName));
    }
  }
}

await mkdir(dist, { recursive: true });

// README.md → raw/index.md
await cp(join(root, 'README.md'), join(dist, 'index.md'));

// handbook/ → raw/handbook/ (README.md renamed to index.md)
await copyDir(join(root, 'handbook'), join(dist, 'handbook'));

console.log('Raw markdown files copied to .vitepress/dist/raw/');
