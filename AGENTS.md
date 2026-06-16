# AGENTS.md

## Project Overview

This is a Vite + React + TypeScript trip cards assignment. The app renders trip cards from a local JSON mock API, supports client-side search and rating sort, and shows trip details in a modal.

Primary stack:

- React 19
- TypeScript
- Vite
- Sass modules (`*.module.scss`)
- TanStack React Query
- `json-server` mock API

## Setup And Commands

Install dependencies:

```bash
npm install
```

Run the frontend dev server:

```bash
npm run dev
```

Run the mock API server:

```bash
npm run mockServer
```

The API is expected at `http://localhost:3000`, and trips are fetched from `/trips`.

Validate changes before handing off:

```bash
npm run lint
npm run build
```

There is currently no dedicated test script.

## Repository Structure

- `src/main.tsx`: React entry point and `QueryClientProvider`.
- `src/App.tsx`: top-level app shell and error boundary.
- `src/api/api.ts`: network calls. Keep API URL assumptions here unless adding proper environment config.
- `src/queryClient.ts`: shared React Query client.
- `src/types/`: shared TypeScript domain types.
- `src/components/`: feature components, reusable UI components, hooks, and component utilities.
- `src/components/UI/`: reusable UI building blocks such as `Card`, `Image`, `Modal`, and `Rating`.
- `data.json`: mock data served by `json-server`.

## Architecture Notes

- Keep feature-specific trip behavior inside `src/components/`.
- Keep reusable, domain-agnostic components inside `src/components/UI/`.
- Keep fetch logic in `src/api/` and server-state management through TanStack React Query.
- Keep pure transformation logic, such as filtering and sorting, outside render components when practical. `src/components/TripCards/utils.ts` is the current pattern.
- Use the existing barrel exports (`index.ts`) when adding components that should be imported from a folder root.

## Code Style

- Use double quotes in TypeScript and TSX files.
- Use semicolons in TypeScript and TSX files.
- Use two-space indentation in TypeScript, TSX, CSS, and SCSS files.
- Keep trailing commas for multiline arrays, objects, argument lists, and dependency arrays.
- Use TypeScript types for props and domain objects.
- Prefer function components and hooks.
- Keep components small and avoid adding broad abstractions for assignment-sized changes.
- Do not use React `memo` for new components unless the task specifically requires performance tuning.
- Do not introduce a new UI library, router, global state manager, or formatter unless the task explicitly calls for it.

## Styling Guidelines

- Component styles live next to the component in a matching `*.module.scss` file.
- Import styles as `styles` from the module file.
- Preserve the current Sass module approach and nested selectors.
- Global CSS belongs in `src/index.css`; avoid adding global rules for component-specific styling.
- Check responsive behavior manually when changing layout, especially the sidebar, card grid, and modal.

## Data And API Notes

- `data.json` is the source for mock trip data.
- Trip objects are typed by `src/types/trip.types.ts`.
- If the mock API shape changes, update both `data.json` and the TypeScript type.
- The current `fetchTrips` call assumes `json-server` is running on port `3000`.

## Validation Checklist

Before completing code changes, run:

```bash
npm run lint
npm run build
```

For UI changes, also start both servers and verify the main flow:

1. Cards load from the mock server.
2. Search filters trips by name.
3. Rating sort orders higher-rated trips first.
4. "More Info" opens the modal.
5. The modal close button works.
6. Broken trip images fall back to `image-not-found.png`.

## Agent Notes

- Keep changes focused; this is a small assignment project.
- Do not modify `package-lock.json` unless dependency changes require it.
- Do not commit generated `dist/` output.
- Respect any existing uncommitted user changes.
