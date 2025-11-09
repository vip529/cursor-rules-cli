import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const edgeFunctions: Pack = {
  id: 'edge-functions',
  label: 'Edge Functions & Serverless',
  files: [
    {
      path: '.cursor/rules/edge-functions.mdc',
      content: loadTemplate(__dirname, 'edge-functions.mdc'),
    },
  ],
};

