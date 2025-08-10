#!/bin/bash

echo "🔍 Running Husky pre-commit checks..."

# Check if there are staged files for lint-staged to work with
if git diff --cached --quiet; then
    echo "ℹ️  No staged files found for lint-staged"
    echo "Running format check on all files instead..."
    
    if pnpm run format:check; then
        echo "✅ Code formatting is correct"
        exit 0
    else
        echo "⚠️  WARNING: Code formatting issues found"
        echo "::warning::Code formatting issues detected - run 'pnpm run format' to fix"
        exit 1
    fi
else
    echo "📋 Found staged files, running lint-staged..."
    
    if pnpm run husky:pre-commit; then
        echo "✅ Husky pre-commit checks passed"
        exit 0
    else
        echo "⚠️  WARNING: Husky pre-commit checks failed"
        echo "::warning::Husky pre-commit validation failed - staged files may need formatting"
        exit 1
    fi
fi