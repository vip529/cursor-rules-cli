import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const swift: Pack = {
  id: 'swift',
  label: 'Swift',
  files: [
    {
      path: '.cursor/rules/swift.mdc',
      content: loadTemplate(__dirname, 'swift.mdc'),
    },
  ],
};
