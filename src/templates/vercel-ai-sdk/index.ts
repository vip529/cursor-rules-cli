import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const vercelAiSdk: Pack = {
  id: 'vercel-ai-sdk',
  label: 'Vercel AI SDK',
  files: [
    {
      path: '.cursor/rules/vercel-ai-sdk.mdc',
      content: loadTemplate(__dirname, 'vercel-ai-sdk.mdc'),
    },
  ],
};

