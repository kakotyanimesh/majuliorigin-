# Majuli Goods

Single-store ecommerce MVP for authentic Assam and Majuli goods.

## Requirements

- Node.js 22 LTS (`nvm use` reads `.nvmrc`)
- pnpm 9.0.0 (pinned in `packageManager`)
- Supabase Postgres for database-backed development

## Start

1. Copy `.env.example` to `.env` and fill local/development values. Never commit `.env` or expose server secrets through `NEXT_PUBLIC_*`.
2. Install with `pnpm install --frozen-lockfile`.
3. Run `pnpm db:validate`, `pnpm db:generate`, and `pnpm db:migrate:dev`.
4. Run `pnpm db:seed` and `pnpm dev`.

The production schema is migration-managed. Do not use `prisma db push` outside local-only experimentation.
