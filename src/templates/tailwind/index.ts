import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const tailwind: Pack = {
  id: 'tailwind',
  label: 'Tailwind CSS',
  files: [
    {
      path: '.cursor/rules/tailwind.mdc',
      content: loadTemplate(__dirname, 'tailwind.mdc'),
    },
  ],
};

