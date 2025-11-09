import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const vue: Pack = {
  id: 'vue',
  label: 'Vue.js 3',
  files: [
    {
      path: '.cursor/rules/vue.mdc',
      content: loadTemplate(__dirname, 'vue.mdc'),
    },
  ],
};

