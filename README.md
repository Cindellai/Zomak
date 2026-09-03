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
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `REVALIDATION_SECRET`.
3. Install dependencies with `npm install`.
4. Run `npm run dev`.
5. Visit `http://localhost:3000` for the site and `http://localhost:3000/studio` for Sanity Studio.

## Project Shape

- `app/` contains public routes, Sanity Studio, and API routes.
- `schemas/` contains Sanity CMS document schemas.
- `components/` contains reusable presentation components.
- `data/` contains temporary mock data used before CMS content is populated.
- `lib/` contains helpers for fetching CMS content and metadata.

## Editing Website Content

Open `/studio` and sign in with an invited Sanity account.

- **Homepage & Site Settings** controls the homepage hero, walk-in section, About section, global contact details, and default metadata.
- **Clinic Locations** controls each clinic’s name, summary, address, contact details, hero image, clinic statement, services, walk-in status, and estimated wait.
- **Services**, **Providers**, **Testimonials**, and **Articles** contain their corresponding reusable website content.

Publish a document after editing. CMS-connected pages refresh published content within approximately 60 seconds. Empty CMS fields safely fall back to the website’s existing content while the initial migration is completed.
