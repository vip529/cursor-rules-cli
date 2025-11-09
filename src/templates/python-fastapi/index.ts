import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const pythonFastAPI: Pack = {
  id: 'python-fastapi',
  label: 'Python FastAPI',
  files: [
    {
      path: '.cursor/rules/python-fastapi.mdc',
      content: loadTemplate(__dirname, 'python-fastapi.mdc'),
    },
  ],
};

