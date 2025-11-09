#!/bin/bash
set -e

echo "Building TypeScript..."
tsc

echo "Resolving path aliases..."
tsc-alias

echo "Copying template files..."
for dir in src/templates/*/; do
  name=$(basename "$dir")
  mkdir -p "dist/templates/$name"
  cp "$dir"*.mdc "dist/templates/$name/" 2>/dev/null || true
  cp "$dir"*.ignore "dist/templates/$name/" 2>/dev/null || true
done

echo "Build complete!"

