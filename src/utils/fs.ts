import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

export async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function readJSON<T = unknown>(path: string): Promise<T | null> {
  try {
    const content = await readFile(path, 'utf-8');
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

export async function readFileContent(path: string): Promise<string | null> {
  try {
    return await readFile(path, 'utf-8');
  } catch {
    return null;
  }
}

export async function ensureDir(path: string): Promise<void> {
  try {
    await mkdir(path, { recursive: true });
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw err;
    }
  }
}

export async function safeWrite(targetPath: string, content: string): Promise<string | null> {
  const dir = dirname(targetPath);
  await ensureDir(dir);

  if (await exists(targetPath)) {
    return null;
  }

  const contentWithNewline = content.endsWith('\n') ? content : content + '\n';
  await writeFile(targetPath, contentWithNewline, 'utf-8');
  
  return targetPath;
}
