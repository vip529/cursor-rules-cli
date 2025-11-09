import type { Pack} from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const blazor: Pack = {
  id: 'blazor',
  label: 'Blazor',
  files: [
    {
      path: '.cursor/rules/blazor.mdc',
      content: loadTemplate(__dirname, 'blazor.mdc'),
    },
  ],
};
