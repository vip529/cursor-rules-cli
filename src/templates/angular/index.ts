import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const angular: Pack = {
  id: 'angular',
  label: 'Angular',
  files: [
    {
      path: '.cursor/rules/angular.mdc',
      content: loadTemplate(__dirname, 'angular.mdc'),
    },
  ],
};

