# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server with HMR
pnpm build      # TypeScript compile + Vite production build (tsc -b && vite build)
pnpm lint       # ESLint static analysis
pnpm preview    # Preview production build locally
```

## Architecture

**React 19 + TypeScript + Vite** single-page application using pnpm.

Entry point: `index.html` → `src/main.tsx` → `src/App.tsx`

**Notable build setup:**
- React Compiler is enabled via `@rolldown/plugin-babel` with `babel-plugin-react-compiler` — this performs automatic memoization, so manual `useMemo`/`useCallback` is generally unnecessary
- ESLint uses the new flat config format (`eslint.config.js`)
- Three tsconfig files: `tsconfig.json` (root/references), `tsconfig.app.json` (src code, ES2023), `tsconfig.node.json` (build tools like vite.config.ts)
- TypeScript strict mode is fully enabled including `noUnusedLocals` and `noUnusedParameters`

**Static assets:** `public/` for files served as-is; `src/assets/` for files processed by Vite (imported in code).
