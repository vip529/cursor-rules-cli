#!/usr/bin/env node

import { addCommand } from '~/commands/add.js';
import { error } from '~/ui/prompts.js';

function displayHelp(): void {
  console.log('Usage: npx @vipinx/cursor-rules add [--select]');
  console.log();
  console.log('Generates Cursor rules files for your project.');
  console.log();
  console.log('Options:');
  console.log('  --select    Skip auto-detection and show pack selection');
  console.log();
  console.log('Environment:');
  console.log('  CR_NO_INTERACTIVE=1    Disable interactive prompts');
}

function parseArgs(args: string[]): { command: string; flags: Set<string> } {
  const command = args[0] || '';
  const flags = new Set(args.slice(1).filter((arg) => arg.startsWith('--')));
  return { command, flags };
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const { command, flags } = parseArgs(args);

  if (!command || command === '--help' || command === '-h') {
    displayHelp();
    process.exit(0);
  }

  if (command === 'add') {
    const forceSelect = flags.has('--select');
    const cwd = process.cwd();

    try {
      await addCommand({ cwd, forceSelect });
    } catch (err) {
      error(`Error: ${(err as Error).message}`);
      process.exit(1);
    }
    return;
  }

  error(`Error: Unknown command "${command}"`);
  error('Run with --help for usage information.');
  process.exit(1);
}

main().catch((err) => {
  error(`Fatal error: ${err}`);
  process.exit(1);
});
