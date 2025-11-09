import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import type { Pack } from '../types.js';

function isInteractive(): boolean {
  return input.isTTY === true && process.env.CR_NO_INTERACTIVE !== '1';
}

export async function multiSelect(message: string, choices: Pack[]): Promise<string[]> {
  if (!isInteractive()) {
    return [];
  }

  const rl = createInterface({ input, output });

  console.log(message);
  choices.forEach((choice, idx) => {
    console.log(`  ${idx + 1}. ${choice.label}`);
  });
  console.log();

  return new Promise((resolve) => {
    rl.question('Enter numbers (comma-separated, e.g., 1,3) or press Enter to skip: ', (answer) => {
      rl.close();

      const trimmed = answer.trim();
      if (!trimmed) {
        resolve([]);
        return;
      }

      const indices = trimmed
        .split(',')
        .map((s) => parseInt(s.trim(), 10))
        .filter((n) => !isNaN(n) && n >= 1 && n <= choices.length);

      const selected = indices.map((i) => choices[i - 1].id);
      resolve(selected);
    });
  });
}

export function log(message: string): void {
  console.log(message);
}

export function error(message: string): void {
  console.error(message);
}
