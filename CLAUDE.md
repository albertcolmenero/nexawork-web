# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 web application for NexaWork, bootstrapped with `create-next-app`. It uses the App Router architecture with TypeScript, Tailwind CSS v4, and React 19.

## Development Commands

### Essential Commands
- `npm run dev --turbopack` - Start development server with Turbo (fastest)
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Development Workflow
- Use `npm run dev --turbopack` for development (turbo mode enabled by default)
- Run `npm run lint` before committing changes
- Build with `npm run build` to verify production readiness

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (Google Fonts)
- **Linting**: ESLint with Next.js config

### Project Structure
```
src/
├── app/                 # App Router pages and layouts
│   ├── layout.tsx      # Root layout with font configuration
│   ├── page.tsx        # Homepage component
│   ├── globals.css     # Global styles and Tailwind imports
│   └── favicon.ico     # Site favicon
public/                 # Static assets
├── nexasinfondo.png    # NexaWork logo/branding
└── [other-svgs]        # Icon assets
```

### Key Configuration
- **Path alias**: `@/*` maps to `src/*`
- **Tailwind v4**: Using inline theme configuration in globals.css
- **Dark mode**: CSS custom properties with `prefers-color-scheme`
- **Turbo mode**: Enabled by default for faster development

### Styling Patterns
- Uses Tailwind utility classes throughout
- Dark mode handled via CSS custom properties (--background, --foreground)
- Responsive design with mobile-first approach using `sm:` breakpoints
- Font variables defined in layout.tsx and referenced in globals.css