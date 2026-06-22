# Zomak Medical Website

Unified multi-location medical website for ZOMAK Medical.

## Stack

- Next.js App Router + React
- Tailwind CSS
- Sanity CMS embedded at `/studio`
- Vercel hosting
- Sanity image pipeline

## Local Setup

1. Copy `.env.example` to `.env.local`.
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_REVALIDATE_SECRET`.
3. Install dependencies with `npm install`.
4. Run `npm run dev`.
5. Visit `http://localhost:3000` for the site and `http://localhost:3000/studio` for Sanity Studio.

## Project Shape

- `app/` contains public routes, Sanity Studio, and API routes.
- `schemas/` contains Sanity CMS document schemas.
- `components/` contains reusable presentation components.
- `data/` contains temporary mock data used before CMS content is populated.
- `lib/` contains helpers for fetching CMS content and metadata.
