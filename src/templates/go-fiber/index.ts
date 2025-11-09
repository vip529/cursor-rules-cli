import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const goFiber: Pack = {
  id: 'go-fiber',
  label: 'Go + Fiber Framework',
  files: [
    {
      path: '.cursor/rules/go-fiber.mdc',
      content: loadTemplate(__dirname, 'go-fiber.mdc'),
    },
  ],
};
