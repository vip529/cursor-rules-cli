import type { Pack } from '~/types.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { loadTemplate } from '~/templates/loader.js';

export const dotnetAspnet: Pack = {
  id: 'dotnet-aspnet',
  label: '.NET & ASP.NET Core',
  files: [
    {
      path: '.cursor/rules/dotnet-aspnet.mdc',
      content: loadTemplate(__dirname, 'dotnet-aspnet.mdc'),
    },
  ],
};
