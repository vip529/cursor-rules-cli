import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const supabase: Pack = {
  id: 'supabase',
  label: 'Supabase',
  files: [
    {
      path: '.cursor/rules/supabase.mdc',
      content: loadTemplate(__dirname, 'supabase.mdc'),
    },
  ],
};

