import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const react: Pack = {
  id: 'react',
  label: 'React',
  files: [
    {
      path: '.cursor/rules/react.mdc',
      content: loadTemplate(__dirname, 'react.mdc'),
    },
  ],
};

