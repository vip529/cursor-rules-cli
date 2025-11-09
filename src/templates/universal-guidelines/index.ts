import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const universalGuidelines: Pack = {
  id: 'universal-guidelines',
  label: 'Universal Guidelines',
  files: [
    {
      path: '.cursor/rules/universal-guidelines.mdc',
      content: loadTemplate(__dirname, 'universal-guidelines.mdc'),
    },
  ],
};

