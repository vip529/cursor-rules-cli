import type { Pack } from '~/types.js';
import { loadTemplate } from '~/templates/loader.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const projectSpecific: Pack = {
  id: 'project-specific',
  label: 'Project-Specific Rules',
  files: [
    {
      path: '.cursor/rules/project-specific.mdc',
      content: loadTemplate(__dirname, 'project-specific.mdc'),
    },
  ],
};

