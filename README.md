# @vipin/cursor-rules

One-shot generator that creates Cursor rules tailored to your project stack.

## 30-second usage

```bash
npx @vipin/cursor-rules add
```

- Detects your stack automatically
- Generates `.cursor/rules/*.mdc` files in proper [MDC format](https://cursor.com/docs/context/rules)
- Never overwrites: existing files are skipped to preserve your edits
- Always creates `project-specific.mdc` and `universal-guidelines.mdc`

## Available Templates (31 total)

### Always Generated (2)
- **Universal Guidelines** - Universal coding standards, error handling, security, testing, and conventional commits (always created)
- **Project-Specific** - A template file for your repository-specific rules and conventions (always created)

### Frontend Frameworks (5)
- **Next.js** - Next.js App Router best practices
- **React** - React components and hooks
- **Vue.js 3** - Vue Composition API
- **Angular** - Angular framework
- **Svelte/SvelteKit** - Svelte framework

### Backend Frameworks (10)
- **Express.js** - Node.js Express
- **NestJS** - NestJS framework
- **Python Django** - Django web framework
- **Python FastAPI** - FastAPI async framework
- **Go + Fiber** - Go with Fiber framework
- **PHP Laravel** - Laravel framework
- **Ruby on Rails** - Rails framework
- **Java Spring Boot** - Spring Boot framework
- **Kotlin** - Kotlin programming
- **Node.js Library (TypeScript)** - TS library development

### .NET Ecosystem (3)
- **C#** - C# language best practices
- **.NET & ASP.NET Core** - ASP.NET Core framework
- **Blazor** - Blazor WebAssembly/Server

### Mobile & Desktop (1)
- **Swift** - iOS/macOS development

### Languages (2)
- **TypeScript & JavaScript** - TS/JS best practices
- **Rust** - Rust programming language

### Styling (1)
- **Tailwind CSS** - Tailwind utility-first CSS

### Database & ORM (2)
- **Prisma ORM** - Prisma database toolkit
- **Supabase** - Supabase database and auth

### Validation & AI (2)
- **Zod Validation** - Zod schema validation
- **Vercel AI SDK** - AI SDK for LLM integration

### Architecture & Deployment (2)
- **Edge Functions & Serverless** - Edge runtime
- **Monorepo & pnpm Workspaces** - Monorepo management

### Universal (2)
- **Universal Guidelines** - Code quality standards (alwaysApply: true)
- **Generic** - Fallback for any project

## Detection

Auto-detects your stack by inspecting:
- `package.json` (JavaScript/TypeScript frameworks)
- `go.mod` (Go projects)
- `Cargo.toml` (Rust projects)
- `manage.py` / `requirements.txt` (Python/Django/FastAPI)
- `*.csproj` / `*.sln` (C#/.NET projects)
- `pom.xml` / `build.gradle` (Java/Kotlin projects)
- `Gemfile` (Ruby projects)
- `composer.json` / `artisan` (PHP/Laravel)
- `Package.swift` / `*.xcodeproj` (Swift projects)

Detection priority: Next.js > Vue > Angular > Svelte > NestJS > Express > Blazor > .NET > C# > Java Spring > Kotlin > Swift > PHP Laravel > Ruby Rails > Django > FastAPI > Rust > Go + Fiber > Node lib

If nothing matches, you get a terminal multi-select to pick templates manually.

## Flags

- `--select`: Skip detection and jump straight to multi-select
- `CR_NO_INTERACTIVE=1`: Disable prompts (exits when nothing detected)

## What it generates

All templates generate `.cursor/rules/*.mdc` files with:
- MDC frontmatter (description, globs, alwaysApply)
- Framework-specific best practices
- Code conventions and patterns
- Security guidelines
- Performance tips

Example output:
```
.cursor/
└── rules/
    ├── nextjs.mdc
    ├── react.mdc
    ├── tailwind.mdc
    ├── universal-guidelines.mdc  # Always generated
    └── project-specific.mdc      # Always generated
```

## Project-Specific Rules

The `project-specific.mdc` file is **always generated** and provides a dedicated place for your repository-specific rules:

- **Custom naming conventions** - Document your team's naming standards
- **Architectural patterns** - Explain project-specific design decisions
- **Domain terminology** - Define business-specific concepts
- **Integration patterns** - Document how you integrate with external services
- **Team agreements** - Capture coding standards and best practices

This file is meant to be edited and committed to your repository. It won't be overwritten on subsequent runs.

## File Safety Policy

**Existing files are preserved**: If a file with the same name already exists in `.cursor/rules/`, it will be **skipped** (not overwritten or renamed). This ensures your custom edits are never lost.

**Example output when files exist**:
```
Created files:
  ✓ .cursor/rules/react.mdc
  ✓ .cursor/rules/tailwind.mdc

Skipped files (already exist):
  ⊘ .cursor/rules/project-specific.mdc
  ⊘ .cursor/rules/universal-guidelines.mdc
```

## Extending

Edit template files in `templates/*.mdc` to customize rules. Each template includes:
- MDC frontmatter with metadata
- Markdown content with conventions

Add new templates by:
1. Creating a new `.mdc` file in `templates/`
2. Creating a module in `src/templates/`
3. Adding it to `src/templates/index.ts`
4. Optionally adding detection logic in `src/detection/detector.ts`

## Development

### Building
```bash
npm run build    # Compile TypeScript and copy templates
npm run clean    # Remove dist directory
```

### Publishing
1. Update version in `package.json`
2. Commit changes: `git commit -am "chore: bump version to x.y.z"`
3. Tag release: `git tag vx.y.z`
4. Push: `git push && git push --tags`
5. Publish: `npm publish`

### Package Contents
- Compiled JavaScript in `dist/`
- All template `.mdc` files
- README and LICENSE

Package size: ~50 KB (gzipped)

## Troubleshooting

- **Non-TTY / CI**: When no stack is detected and there's no TTY (or `CR_NO_INTERACTIVE=1`), the tool exits without creating files
- **Permission issues**: Ensure you run from a directory where `.cursor/` can be created
