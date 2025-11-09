import { join } from 'node:path';
import { detect } from '~/detection/detector.js';
import { multiSelect, log } from '~/ui/prompts.js';
import { packs, getPacksByIds, alwaysIncludedPacks } from '~/templates/index.js';
import { safeWrite } from '~/utils/fs.js';

interface AddCommandOptions {
  cwd: string;
  forceSelect: boolean;
}

export async function addCommand(options: AddCommandOptions): Promise<void> {
  const { cwd, forceSelect } = options;

  let selectedPackIds: string[] = [];

  if (!forceSelect) {
    const result = await detect(cwd);
    selectedPackIds = result.detected;

    if (selectedPackIds.length > 0) {
      log(`Detected: ${result.labels.join(', ')}`);
      log('');
    }
  }

  if (selectedPackIds.length === 0) {
    const selected = await multiSelect('No stack detected. Select packs to generate:', packs);

    if (selected.length === 0) {
      log('No packs selected. Exiting.');
      process.exit(0);
    }

    selectedPackIds = selected;
  }

  const alwaysIncludedIds = alwaysIncludedPacks.map((pack) => pack.id);
  const allPackIds = [...new Set([...selectedPackIds, ...alwaysIncludedIds])];

  const { created, skipped } = await generateFiles(cwd, allPackIds);
  displaySummary(created, skipped, cwd);
}

interface GenerateResult {
  created: string[];
  skipped: string[];
}

async function generateFiles(cwd: string, packIds: string[]): Promise<GenerateResult> {
  const selectedPacks = getPacksByIds(packIds);
  const createdFiles: string[] = [];
  const skippedFiles: string[] = [];

  for (const pack of selectedPacks) {
    for (const file of pack.files) {
      const targetPath = join(cwd, file.path);
      try {
        const writtenPath = await safeWrite(targetPath, file.content);
        if (writtenPath === null) {
          skippedFiles.push(targetPath);
        } else {
          createdFiles.push(writtenPath);
        }
      } catch (err) {
        throw new Error(`Failed to write ${file.path}: ${(err as Error).message}`);
      }
    }
  }

  return { created: createdFiles, skipped: skippedFiles };
}

function displaySummary(createdFiles: string[], skippedFiles: string[], cwd: string): void {
  if (createdFiles.length > 0) {
    log('Created files:');
    createdFiles.forEach((file) => {
      const relative = file.replace(cwd + '/', '');
      log(`  ✓ ${relative}`);
    });
    log('');
  }

  if (skippedFiles.length > 0) {
    log('Skipped files (already exist):');
    skippedFiles.forEach((file) => {
      const relative = file.replace(cwd + '/', '');
      log(`  ⊘ ${relative}`);
    });
    log('');
  }

  log('Done!');
}
