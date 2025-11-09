import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const nestjs: Pack = {
  id: 'nestjs',
  label: 'NestJS',
  files: [
    {
      path: '.cursor/rules/nestjs.mdc',
      content: loadTemplate(__dirname, 'nestjs.mdc'),
    },
  ],
};

