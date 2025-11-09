import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const generic: Pack = {
  id: 'generic',
  label: 'Generic (Fallback)',
  files: [
    {
      path: '.cursor/rules/generic.mdc',
      content: loadTemplate(__dirname, 'generic.mdc'),
    },
    {
      path: '.cursor/rules/.context.ignore',
      content: loadTemplate(__dirname, 'generic.ignore'),
    },
  ],
};
