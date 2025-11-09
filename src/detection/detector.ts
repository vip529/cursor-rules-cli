import { join } from 'node:path';
import type { PackageJson, DetectionResult } from '~/types.js';
import { exists, readJSON, readFileContent } from '~/utils/fs.js';

async function detectNextJS(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return 'next' in allDeps && 'typescript' in allDeps;
}

async function detectVue(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return 'vue' in allDeps && !('next' in allDeps);
}

async function detectAngular(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return '@angular/core' in allDeps;
}

async function detectSvelte(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return 'svelte' in allDeps;
}

async function detectExpress(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return 'express' in allDeps && !('@nestjs/core' in allDeps);
}

async function detectNestJS(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return '@nestjs/core' in allDeps;
}

async function detectNodeLibTS(cwd: string): Promise<boolean> {
  const pkgJson = await readJSON<PackageJson>(join(cwd, 'package.json'));
  if (!pkgJson) return false;
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return 'typescript' in allDeps && !('next' in allDeps) && !('vue' in allDeps) && !('@angular/core' in allDeps) && !('svelte' in allDeps);
}

async function detectPythonDjango(cwd: string): Promise<boolean> {
  if (await exists(join(cwd, 'manage.py'))) return true;
  const reqFile = join(cwd, 'requirements.txt');
  if (await exists(reqFile)) {
    const content = await readFileContent(reqFile);
    return content?.toLowerCase().includes('django') || false;
  }
  return false;
}

async function detectPythonFastAPI(cwd: string): Promise<boolean> {
  const reqFile = join(cwd, 'requirements.txt');
  if (await exists(reqFile)) {
    const content = await readFileContent(reqFile);
    return content?.toLowerCase().includes('fastapi') || false;
  }
  return false;
}

async function detectCSharp(cwd: string): Promise<boolean> {
  return await exists(join(cwd, '*.csproj')) || await exists(join(cwd, '*.sln'));
}

async function detectDotNet(cwd: string): Promise<boolean> {
  const programCs = join(cwd, 'Program.cs');
  if (await exists(programCs)) {
    const content = await readFileContent(programCs);
    return content?.includes('WebApplication') || content?.includes('ASP.NET') || false;
  }
  return false;
}

async function detectBlazor(cwd: string): Promise<boolean> {
  return await exists(join(cwd, '*.razor')) || await exists(join(cwd, 'Pages')) || await exists(join(cwd, 'Components'));
}

async function detectPHPLaravel(cwd: string): Promise<boolean> {
  return await exists(join(cwd, 'artisan')) || await exists(join(cwd, 'composer.json'));
}

async function detectRubyRails(cwd: string): Promise<boolean> {
  return await exists(join(cwd, 'Gemfile')) && await exists(join(cwd, 'config/routes.rb'));
}

async function detectJavaSpring(cwd: string): Promise<boolean> {
  const pomXml = join(cwd, 'pom.xml');
  const buildGradle = join(cwd, 'build.gradle');
  if (await exists(pomXml)) {
    const content = await readFileContent(pomXml);
    return content?.includes('spring-boot') || false;
  }
  if (await exists(buildGradle)) {
    const content = await readFileContent(buildGradle);
    return content?.includes('spring-boot') || false;
  }
  return false;
}

async function detectKotlin(cwd: string): Promise<boolean> {
  return await exists(join(cwd, 'build.gradle.kts')) || await exists(join(cwd, '*.kt'));
}

async function detectSwift(cwd: string): Promise<boolean> {
  return await exists(join(cwd, 'Package.swift')) || await exists(join(cwd, '*.xcodeproj'));
}

async function detectGoFiber(cwd: string): Promise<boolean> {
  return await exists(join(cwd, 'go.mod'));
}

async function detectRust(cwd: string): Promise<boolean> {
  return await exists(join(cwd, 'Cargo.toml'));
}

const detectors = [
  { id: 'nextjs', label: 'Next.js', detect: detectNextJS },
  { id: 'vue', label: 'Vue.js 3', detect: detectVue },
  { id: 'angular', label: 'Angular', detect: detectAngular },
  { id: 'svelte', label: 'Svelte/SvelteKit', detect: detectSvelte },
  { id: 'nestjs', label: 'NestJS', detect: detectNestJS },
  { id: 'express', label: 'Express.js', detect: detectExpress },
  { id: 'blazor', label: 'Blazor', detect: detectBlazor },
  { id: 'dotnet-aspnet', label: '.NET & ASP.NET Core', detect: detectDotNet },
  { id: 'csharp', label: 'C#', detect: detectCSharp },
  { id: 'java-spring', label: 'Java Spring Boot', detect: detectJavaSpring },
  { id: 'kotlin', label: 'Kotlin', detect: detectKotlin },
  { id: 'swift', label: 'Swift', detect: detectSwift },
  { id: 'php-laravel', label: 'PHP Laravel', detect: detectPHPLaravel },
  { id: 'ruby-rails', label: 'Ruby on Rails', detect: detectRubyRails },
  { id: 'python-django', label: 'Python Django', detect: detectPythonDjango },
  { id: 'python-fastapi', label: 'Python FastAPI', detect: detectPythonFastAPI },
  { id: 'rust', label: 'Rust', detect: detectRust },
  { id: 'go-fiber', label: 'Go + Fiber', detect: detectGoFiber },
  { id: 'node-lib-ts', label: 'Node.js Library (TypeScript)', detect: detectNodeLibTS },
] as const;

export async function detect(cwd: string): Promise<DetectionResult> {
  const detected: string[] = [];
  const labels: string[] = [];

  for (const detector of detectors) {
    if (await detector.detect(cwd)) {
      detected.push(detector.id);
      labels.push(detector.label);
      break;
    }
  }

  return { detected, labels };
}
