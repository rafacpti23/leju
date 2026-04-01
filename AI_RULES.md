# AI Rules — Leju Event Management App

## Tech Stack

- **React 18** with **TypeScript** and **Vite** (using `@vitejs/plugin-react-swc` for fast HMR). The app runs on port `8080`.
- **React Router DOM v6** for client-side routing. All routes are defined in `src/App.tsx` using `<BrowserRouter>`, `<Routes>`, and `<Route>`.
- **Tailwind CSS v3** with CSS-variable-based theming (`hsl(var(--...))` pattern). Dark mode is class-based via `next-themes`. The design token system uses shadcn/ui's standard color palette (primary, secondary, muted, accent, destructive, card, popover, sidebar, etc.) defined in `src/index.css`.
- **shadcn/ui** (default style, base color: slate) for all UI primitives. Components live in `src/components/ui/` and must **not** be edited directly — create new wrapper components in `src/components/` instead.
- **Radix UI** primitives power the shadcn/ui components. Never use Radix directly when a shadcn/ui wrapper exists; only reach for Radix directly for primitives that lack a shadcn/ui component.
- **Supabase** for authentication, database, and backend services. The client is configured in `src/integrations/supabase/client.ts`. Auth state is managed via `AuthContext` (`src/contexts/AuthContext.tsx`) exposed through the `useAuth()` hook.
- **TanStack React Query v5** for server-state management (fetching, caching, and syncing data). A `QueryClient` is instantiated in `src/App.tsx` and provided via `QueryClientProvider`.
- **react-hook-form** + **zod** + **@hookform/resolvers** for form handling and schema validation. Use the `z.object()` pattern for validation schemas and `useForm<{...}>()` with `zodResolver` for typed forms.
- **lucide-react** for all icons. Do not install additional icon libraries.
- **sonner** for toast notifications (configured in `src/App.tsx` via `<Toaster />`). Do not use the older `use-toast` / `toast.tsx` system from shadcn unless specifically needed.

## Project Structure

```
src/
├── components/
│   ├── ui/          → shadcn/ui primitives (DO NOT EDIT)
│   ├── Layout/      → Navbar, Sidebar, AuthButton, etc.
│   └── ...          → Feature-grouped custom components
├── pages/           → Route-level page components
│   └── Index.tsx    → Main/dashboard page
├── contexts/        → React Context providers (AuthContext, EventContext)
├── hooks/           → Custom React hooks
├── types/           → TypeScript interfaces and type definitions
├── lib/             → Utilities (cn(), helpers)
├── services/        → Service layer for API/backend calls
├── integrations/    → Third-party client configs (Supabase)
├── data/            → Static/seed data
└── App.tsx          → Route definitions and provider tree
```

## Rules

### Routing
- All routes **must** be registered in `src/App.tsx` inside the `<Routes>` block. Do not create routing logic elsewhere.
- Page components go in `src/pages/`. Each page is a default export from its file.
- New pages must be imported and added as a `<Route>` in `App.tsx`.

### Styling
- **Always use Tailwind CSS utility classes** for all styling. Do not write raw CSS or inline `style={{}}` unless Tailwind genuinely cannot express the value.
- Use the `cn()` utility from `@/lib/utils` to merge Tailwind classes conditionally.
- Respect the existing CSS-variable color system (`bg-primary`, `text-muted-foreground`, `border`, etc.). Do not hard-code hex colors in component code.
- Fonts: `Manrope` (sans/body) and `Cormorant Garamond` (decorative) are loaded via Google Fonts in `index.css`.

### Components
- **Never edit files in `src/components/ui/`**. These are managed by shadcn/ui. If you need a modified version, create a new component in `src/components/`.
- Import shadcn/ui components using the `@/components/ui/<name>` alias (e.g., `import { Button } from "@/components/ui/button"`).
- Group custom components by feature domain (e.g., `src/components/Events/`, `src/components/GuestList/`).
- Keep components small and focused. Prefer composition over monolithic components.

### Forms & Validation
- Use **react-hook-form** with **zod** schemas for all form logic.
- Define a zod schema with `z.object({...})` and infer the TypeScript type with `z.infer<typeof schema>`.
- Use the `<Form>`, `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormControl>`, `<FormMessage>` components from `@/components/ui/form` to build form UIs.

### Data Fetching & State
- Use **TanStack React Query** (`useQuery`, `useMutation`, `useQueryClient`) for all server-state (API calls, Supabase queries).
- Use React Context (`src/contexts/`) for global client-side state (auth, selected event).
- Keep Supabase queries in the `services/` layer or inside hooks — do not scatter direct Supabase calls across page components.

### Icons
- Use **lucide-react** exclusively for icons. Import individual icons: `import { Plus, Trash2 } from "lucide-react"`.

### Toasts & Notifications
- Use **sonner** (`import { toast } from "sonner"`) for all toast notifications.
- Usage: `toast.success("Done!")`, `toast.error("Failed")`, `toast("Info")`.

### Type Definitions
- Define shared types/interfaces in `src/types/` (e.g., `event.ts`, `guest.ts`, `finance.ts`).
- Do not define interfaces inline in components when the type is reused or represents a domain entity.

### Path Aliases
- The `@/` alias maps to `./src/`. Always use `@/` imports in source code (e.g., `import { cn } from "@/lib/utils"`).

### General Best Practices
- Do not install new npm packages unless absolutely necessary. The project already includes comprehensive dependencies.
- Use `const` over `let`; avoid `var`.
- Prefer named exports for utilities and hooks; default exports for page components and React contexts.
- Keep files under ~300 lines. Split large components into smaller sub-components in the same feature folder.
