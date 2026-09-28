import { groq } from 'next-sanity'

import { client } from './client'
import { projectId } from './env'

export type HomepageContent = {
  serviceCards?: Array<{ title?: string; slug?: string; category?: string; summary?: string; imageUrl?: string; imageAlt?: string }>
  testimonials?: Array<{ category?: string; headline?: string; quote?: string; source?: string; rating?: number; googleProfileUrl?: string; locationName?: string }>
  hero?: {
    title?: string
    accentTitle?: string
    description?: string
    imageUrl?: string
    imageAlt?: string
    primaryLabel?: string
    primaryHref?: string
    secondaryLabel?: string
    secondaryHref?: string
  }
  walkIns?: {
    title?: string
    firstParagraph?: string
    secondParagraph?: string
    imageUrl?: string
    imageAlt?: string
    buttonLabel?: string
    buttonHref?: string
  }
  about?: {
    eyebrow?: string
    statement?: string
    leftImageUrl?: string
    leftImageAlt?: string
    rightImageUrl?: string
    rightImageAlt?: string
    buttonLabel?: string
    buttonHref?: string
    stats?: Array<{ value?: string; label?: string }>
  }
  services?: {
    heading?: string
    cards?: Array<{ displayTitle?: string; href?: string; title?: string; slug?: string; imageUrl?: string; imageAlt?: string }>
  }
  familyPractice?: {
    headingBefore?: string
    headingAccent?: string
    headingAfter?: string
    description?: string
    imageUrl?: string
    imageAlt?: string
    buttonLabel?: string
    buttonHref?: string
  }
  howItWorks?: {
    heading?: string
    accent?: string
    description?: string
    steps?: Array<{ title?: string; description?: string; cta?: string; href?: string; imageUrl?: string; imageAlt?: string }>
  }
  aesthetics?: { eyebrow?: string; heading?: string; description?: string; imageUrl?: string; imageAlt?: string; buttonLabel?: string; buttonHref?: string }
  locations?: { heading?: string; description?: string; imageUrl?: string; imageAlt?: string }
  reviews?: { headingNumber?: string; headingAccent?: string; description?: string }
  faq?: { heading?: string; items?: Array<{ question?: string; answer?: string }> }
  finalCta?: { heading?: string; imageUrl?: string; imageAlt?: string; buttonLabel?: string; buttonHref?: string }
}

export async function getHomepageContent(): Promise<HomepageContent | null> {
  if (projectId === 'replace-me') return null

  try {
    return await client.fetch(
      groq`*[_type == "siteSettings"][0]{
        "serviceCards": *[_type == "service" && featuredOnHomepage == true] | order(title asc){
          title, "slug": slug.current, category, summary, "imageUrl": image.asset->url, imageAlt
        },
        "testimonials": *[_type == "testimonial" && featuredOnHomepage != false && verifiedForPublication == true && defined(googleProfileUrl)] | order(_createdAt asc)[0...8]{
          category, headline, quote, source, rating, googleProfileUrl, "locationName": location->name
        },
        "hero": homeHero{
          title,
          accentTitle,
          description,
          "imageUrl": image.asset->url,
          imageAlt,
          primaryLabel,
          primaryHref,
          secondaryLabel,
          secondaryHref
        },
        "walkIns": homeWalkIns{
          title,
          firstParagraph,
          secondParagraph,
          "imageUrl": image.asset->url,
          imageAlt,
          buttonLabel,
          buttonHref
        },
        "about": homeAbout{
          eyebrow,
          statement,
          "leftImageUrl": leftImage.asset->url,
          leftImageAlt,
          "rightImageUrl": rightImage.asset->url,
          rightImageAlt,
          buttonLabel,
          buttonHref,
          stats[]{value, label}
        },
        "services": homeServices{
          heading,
          cards[]{
            displayTitle,
            href,
            "title": service->title,
            "slug": service->slug.current,
            "imageUrl": service->image.asset->url,
            "imageAlt": service->imageAlt
          }
        },
        "familyPractice": homeFamilyPractice{
          headingBefore, headingAccent, headingAfter, description,
          "imageUrl": image.asset->url, imageAlt, buttonLabel, buttonHref
        },
        "howItWorks": homeHowItWorks{
          heading, accent, description,
          steps[]{title, description, cta, href, "imageUrl": image.asset->url, imageAlt}
        },
        "aesthetics": homeAesthetics{
          eyebrow, heading, description, "imageUrl": image.asset->url, imageAlt, buttonLabel, buttonHref
        },
        "locations": homeLocations{heading, description, "imageUrl": image.asset->url, imageAlt},
        "reviews": homeReviews{headingNumber, headingAccent, description},
        "faq": homeFaq{heading, items[]{question, answer}},
        "finalCta": homeFinalCta{
          heading, "imageUrl": image.asset->url, imageAlt, buttonLabel, buttonHref
        }
      }`,
      {},
      { next: { revalidate: 60 } }
    )
  } catch {
    return null
  }
}
