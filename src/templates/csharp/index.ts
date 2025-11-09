import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const csharp: Pack = {
  id: 'csharp',
  label: 'C#',
  files: [
    {
      path: '.cursor/rules/csharp.mdc',
      content: loadTemplate(__dirname, 'csharp.mdc'),
    },
  ],
};
