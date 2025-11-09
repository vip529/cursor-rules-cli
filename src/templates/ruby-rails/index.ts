import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const rubyRails: Pack = {
  id: 'ruby-rails',
  label: 'Ruby on Rails',
  files: [
    {
      path: '.cursor/rules/ruby-rails.mdc',
      content: loadTemplate(__dirname, 'ruby-rails.mdc'),
    },
  ],
};
