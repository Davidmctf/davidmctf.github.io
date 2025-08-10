# CI/CD Configuration

## Overview

This project includes a comprehensive CI/CD pipeline that builds and deploys the Angular application to GitHub Pages while integrating Husky validation checks.

## Workflow Features

### 🔧 Test Job

- **Triggers**: Push to main, Pull Requests
- **Husky Integration**: Runs pre-commit checks with **warning-only** behavior
- **Build Validation**: Tests Angular build with CI configuration
- **Test Execution**: Runs unit tests (non-blocking)

### 🚀 Deploy Job

- **Triggers**: Push to main branch only
- **Build**: Production build with proper base-href for GitHub Pages
- **Deploy**: Automatic deployment to `gh-pages` branch

## Husky Integration

The CI pipeline integrates Husky hooks in a non-blocking manner:

- ✅ **Pre-commit checks** run automatically
- ⚠️ **Warnings are shown** for formatting/lint issues
- 🚀 **Deployment continues** regardless of Husky warnings
- 📝 **GitHub Actions annotations** display warnings in the UI

### Warning Behavior Example

```bash
🔍 Running Husky pre-commit checks...
⚠️  WARNING: Code formatting issues found
::warning::Code formatting issues detected - run 'pnpm run format' to fix
```

## Configuration Files

- `.github/workflows/ci.yml` - Main CI/CD workflow
- `.github/scripts/run-husky-checks.sh` - Husky integration script
- `angular.json` - Added `ci` build configuration for offline builds
- `package.json` - Added CI-specific scripts

## Build Configurations

### CI Configuration

- **Purpose**: Optimized for CI environments
- **Features**: Disabled font inlining, offline-friendly
- **Usage**: `ng build --configuration=ci`

### Production Configuration

- **Purpose**: Standard production build
- **Features**: Full optimizations enabled
- **Usage**: `ng build --configuration=production`

## Scripts

### Core Scripts

- `pnpm run build` - Standard build
- `pnpm run test:ci` - Run tests in CI mode
- `pnpm run format` - Auto-format code
- `pnpm run format:check` - Check formatting

### CI-Specific Scripts

- `pnpm run ci:husky-checks` - Run Husky checks
- `pnpm run husky:pre-commit` - Pre-commit hook
- `.github/scripts/run-husky-checks.sh` - Enhanced Husky integration

## Manual Testing

Run the workflow demonstration locally:

```bash
# Test complete workflow
./.github/scripts/demo-workflow.sh

# Test individual components
pnpm run ng build --configuration=ci
./.github/scripts/run-husky-checks.sh
pnpm run test:ci
```

## Deployment

### Automatic Deployment

- Triggered on push to `main` branch
- Builds with CI configuration
- Deploys to GitHub Pages via `gh-pages` branch

### Manual Deployment

```bash
pnpm run deploy
```

## GitHub Actions Permissions

The workflow requires the following permissions:

- `contents: write` - For GitHub Pages deployment

## Troubleshooting

### Build Issues

- **Google Fonts errors**: Resolved by CI configuration with disabled font inlining
- **TypeScript errors**: Fixed with updated `tsconfig.spec.json`

### Formatting Issues

- **67 files formatted**: All fixed during setup
- **Continuous formatting**: Husky pre-commit hook maintains formatting

### Test Issues

- **Non-blocking**: Tests show warnings but don't block deployment
- **Coverage**: Generated with `--code-coverage` flag
