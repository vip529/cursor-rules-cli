import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const nodeLibTS: Pack = {
  id: 'node-lib-ts',
  label: 'Node.js Library (TypeScript)',
  files: [
    {
      path: '.cursor/rules/node-lib-ts.mdc',
      content: loadTemplate(__dirname, 'node-lib-ts.mdc'),
    },
  ],
};
