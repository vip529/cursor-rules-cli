import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export function loadTemplate(callerDir: string, filename: string): string {
  const path = join(callerDir, filename);
  return readFileSync(path, 'utf-8');
}

