import type { Pack } from '~/types.js';
import { loadTemplate } from '~/templates/loader.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const nextjs: Pack = {
  id: 'nextjs',
  label: 'Next.js App Router',
  files: [
    {
      path: '.cursor/rules/nextjs.mdc',
      content: loadTemplate(__dirname, 'nextjs.mdc'),
    },
  ],
};

