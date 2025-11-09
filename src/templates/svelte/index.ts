import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const svelte: Pack = {
  id: 'svelte',
  label: 'Svelte/SvelteKit',
  files: [
    {
      path: '.cursor/rules/svelte.mdc',
      content: loadTemplate(__dirname, 'svelte.mdc'),
    },
  ],
};

