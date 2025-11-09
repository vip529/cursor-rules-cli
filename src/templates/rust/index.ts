import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const rust: Pack = {
  id: 'rust',
  label: 'Rust',
  files: [
    {
      path: '.cursor/rules/rust.mdc',
      content: loadTemplate(__dirname, 'rust.mdc'),
    },
  ],
};

