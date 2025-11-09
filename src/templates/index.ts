import type { Pack } from '~/types.js';
import { nodeLibTS } from './node-lib-ts/index.js';
import { goFiber } from './go-fiber/index.js';
import { pythonDjango } from './python-django/index.js';
import { pythonFastAPI } from './python-fastapi/index.js';
import { vue } from './vue/index.js';
import { angular } from './angular/index.js';
import { svelte } from './svelte/index.js';
import { express } from './express/index.js';
import { nestjs } from './nestjs/index.js';
import { tailwind } from './tailwind/index.js';
import { rust } from './rust/index.js';
import { generic } from './generic/index.js';
import { edgeFunctions } from './edge-functions/index.js';
import { monorepo } from './monorepo/index.js';
import { nextjs } from './nextjs/index.js';
import { prisma } from './prisma/index.js';
import { react } from './react/index.js';
import { supabase } from './supabase/index.js';
import { typescriptJavascript } from './typescript-javascript/index.js';
import { universalGuidelines } from './universal-guidelines/index.js';
import { vercelAiSdk } from './vercel-ai-sdk/index.js';
import { zod } from './zod/index.js';
import { csharp } from './csharp/index.js';
import { dotnetAspnet } from './dotnet-aspnet/index.js';
import { blazor } from './blazor/index.js';
import { phpLaravel } from './php-laravel/index.js';
import { rubyRails } from './ruby-rails/index.js';
import { javaSpring } from './java-spring/index.js';
import { kotlin } from './kotlin/index.js';
import { swift } from './swift/index.js';
import { projectSpecific } from './project-specific/index.js';

export const packs: Pack[] = [
  nextjs,
  nodeLibTS,
  pythonDjango,
  pythonFastAPI,
  vue,
  angular,
  svelte,
  express,
  nestjs,
  goFiber,
  rust,
  csharp,
  dotnetAspnet,
  blazor,
  phpLaravel,
  rubyRails,
  javaSpring,
  kotlin,
  swift,
  react,
  tailwind,
  typescriptJavascript,
  prisma,
  supabase,
  zod,
  vercelAiSdk,
  edgeFunctions,
  monorepo,
  generic,
];

export const alwaysIncludedPacks: Pack[] = [projectSpecific, universalGuidelines];

export function getPackById(id: string): Pack | undefined {
  return packs.find((pack) => pack.id === id) || alwaysIncludedPacks.find((pack) => pack.id === id);
}

export function getPacksByIds(ids: string[]): Pack[] {
  return ids
    .map((id) => getPackById(id))
    .filter((pack): pack is Pack => pack !== undefined);
}
