import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const prisma: Pack = {
  id: 'prisma',
  label: 'Prisma ORM',
  files: [
    {
      path: '.cursor/rules/prisma.mdc',
      content: loadTemplate(__dirname, 'prisma.mdc'),
    },
  ],
};

