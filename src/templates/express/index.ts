import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const express: Pack = {
  id: 'express',
  label: 'Express.js',
  files: [
    {
      path: '.cursor/rules/express.mdc',
      content: loadTemplate(__dirname, 'express.mdc'),
    },
  ],
};

