import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const folders = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(root, name, 'AGENTS.md')));

let failed = false;
for (const folder of folders) {
  const agent = readFileSync(join(root, folder, 'AGENTS.md'), 'utf8');
  const demoPath = join(root, folder, 'demo', 'index.html');
  const demo = existsSync(demoPath) ? readFileSync(demoPath, 'utf8') : '';
  const checks = {
    styleFamily: /^## Style Family$/m.test(agent),
    clientTarget: /^## Client-Grade Demo Target$/m.test(agent),
    signatureRule: /^## Signature Artifact Rule$/m.test(agent),
    nodeRules: /^## Node Library Rules$/m.test(agent),
    clientProof: demo.includes('class="client-proof"'),
    signatureArtifact: demo.includes('class="signature-artifact"'),
    gsap: demo.includes('node_modules/gsap'),
  };
  for (const [name, ok] of Object.entries(checks)) {
    if (!ok) {
      failed = true;
      console.error(`${folder}: missing ${name}`);
    }
  }
}

const index = readFileSync(join(root, 'index.html'), 'utf8');
const links = [...index.matchAll(/href="\.\/([^"]+)"/g)].map((match) => match[1]);
for (const href of links) {
  if (!existsSync(join(root, href))) {
    failed = true;
    console.error(`missing linked file: ${href}`);
  }
}

console.log(`${folders.length} style agents checked, ${links.length} launcher links checked.`);
process.exit(failed ? 1 : 0);