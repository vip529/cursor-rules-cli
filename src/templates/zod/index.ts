import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const zod: Pack = {
  id: 'zod',
  label: 'Zod Validation',
  files: [
    {
      path: '.cursor/rules/zod.mdc',
      content: loadTemplate(__dirname, 'zod.mdc'),
    },
  ],
};

