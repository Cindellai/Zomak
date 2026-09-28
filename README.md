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

## Production search setup

Preview and staging deployments are intentionally excluded from search engines. For the final production deployment only:

1. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin, without a trailing slash (for example, `https://www.your-final-domain.ca`).
2. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` in the production environment only. Leave it `false` for local, preview and staging environments.
3. Redeploy so canonical URLs, `robots.txt`, `sitemap.xml`, social URLs and structured-data URLs are generated from the final domain.
4. Verify `https://your-domain/robots.txt` allows crawling and references `https://your-domain/sitemap.xml`.
5. Verify a representative homepage, location, physician, service and article in Google Rich Results Test and Schema Markup Validator.
6. Add and verify the final domain property in Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml` in each service.
7. Supply the old-site URL inventory before launch and add one-to-one redirects in `next.config.mjs`; do not redirect unrelated old pages to the homepage.
8. Connect Google Tag Manager or the approved analytics platform to the existing `dataLayer` events: `call_click`, `directions_click`, `registration_start`, `booking_start` and `referral_action`.

Do not enable indexing until the final domain, clinic details, redirects and approved public content have been checked.
