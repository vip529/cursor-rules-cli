import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const pythonDjango: Pack = {
  id: 'python-django',
  label: 'Python Django',
  files: [
    {
      path: '.cursor/rules/python-django.mdc',
      content: loadTemplate(__dirname, 'python-django.mdc'),
    },
  ],
};

