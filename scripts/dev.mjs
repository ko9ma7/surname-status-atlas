import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const requestedRoot = process.argv[2] || '.';
const port = Number(process.argv[3] || 5173);
const root = resolve(process.cwd(), requestedRoot);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.webmanifest':'application/manifest+json'};

const server = http.createServer(async (req,res) => {
  try {
    const raw = decodeURIComponent((req.url || '/').split('?')[0]);
    const safe = normalize(raw).replace(/^([.][.][/\\])+/, '');
    let file = join(root, safe === '/' ? 'index.html' : safe);
    const s = await stat(file).catch(()=>null);
    if (s?.isDirectory()) file = join(file,'index.html');
    const data = await readFile(file);
    res.writeHead(200, {'Content-Type': mime[extname(file)] || 'application/octet-stream'}); res.end(data);
  } catch {
    const fallback = await readFile(join(root,'404.html')).catch(()=>Buffer.from('404'));
    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'}); res.end(fallback);
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Serving ${root} on http://127.0.0.1:${port}`));
