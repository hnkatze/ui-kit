# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Ionic Angular application with Capacitor integration, designed as a UI kit with tab-based navigation. The app uses Angular v20, Ionic v8, and includes both TailwindCSS and PrimeNG for styling.

## Common Development Commands

### Development
- `npm start` or `ng serve` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for development

### Testing & Quality
- `npm test` - Run unit tests with Karma/Jasmine
- `npm run lint` - Run ESLint for TypeScript and HTML files
- To run a single test spec: `ng test --include='**/path-to-spec.ts'`

### Ionic & Capacitor
- `ionic serve` - Run with Ionic CLI (if installed globally)
- `ionic capacitor run [platform]` - Run on device/emulator
- `ionic capacitor build [platform]` - Build for specific platform

## Architecture

### Project Structure
- **Tab-based Navigation**: The app uses a tabs layout with three default tabs (Tab1, Tab2, Tab3)
- **Lazy Loading**: Each tab module is lazy-loaded via Angular routing
- **Shared Components**: Reusable components like `ExploreContainerComponent` are in their own modules

### Key Architectural Patterns
1. **Module Organization**: Each page/tab has its own module with routing, following Angular's module pattern
2. **Routing Hierarchy**: 
   - Main routing in `app-routing.module.ts` loads tabs module
   - Tabs routing in `tabs-routing.module.ts` manages tab navigation
   - Default route redirects to `/tabs/tab1`

3. **Styling Architecture**:
   - Global styles in `src/global.scss` including TailwindCSS and Ionic CSS imports
   - Component-specific SCSS files for scoped styling
   - Dark mode support via Ionic's dark system palette

4. **Component Naming Convention**: 
   - Pages use `.page.ts` suffix and `Page` class suffix
   - Regular components use `.component.ts` and `Component` suffix

### Testing Strategy
- Unit tests use Jasmine/Karma configuration
- Test files follow `.spec.ts` naming convention
- Tests can be run in CI mode with `ng test --configuration=ci`

### Build Configuration
- Output directory: `www/`
- Production builds include budgets and file replacements
- Environment files in `src/environments/`