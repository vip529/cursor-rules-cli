import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const phpLaravel: Pack = {
  id: 'php-laravel',
  label: 'PHP Laravel',
  files: [
    {
      path: '.cursor/rules/php-laravel.mdc',
      content: loadTemplate(__dirname, 'php-laravel.mdc'),
    },
  ],
};
