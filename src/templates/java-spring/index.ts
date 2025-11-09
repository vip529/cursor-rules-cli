import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const javaSpring: Pack = {
  id: 'java-spring',
  label: 'Java Spring Boot',
  files: [
    {
      path: '.cursor/rules/java-spring.mdc',
      content: loadTemplate(__dirname, 'java-spring.mdc'),
    },
  ],
};
