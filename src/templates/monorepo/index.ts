import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const monorepo: Pack = {
  id: 'monorepo',
  label: 'Monorepo & pnpm Workspaces',
  files: [
    {
      path: '.cursor/rules/monorepo.mdc',
      content: loadTemplate(__dirname, 'monorepo.mdc'),
    },
  ],
};

