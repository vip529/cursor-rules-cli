import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const kotlin: Pack = {
  id: 'kotlin',
  label: 'Kotlin',
  files: [
    {
      path: '.cursor/rules/kotlin.mdc',
      content: loadTemplate(__dirname, 'kotlin.mdc'),
    },
  ],
};
