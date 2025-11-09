import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const typescriptJavascript: Pack = {
  id: 'typescript-javascript',
  label: 'TypeScript & JavaScript',
  files: [
    {
      path: '.cursor/rules/typescript-javascript.mdc',
      content: loadTemplate(__dirname, 'typescript-javascript.mdc'),
    },
  ],
};

