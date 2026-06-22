import { groq } from 'next-sanity'

export const homePageQuery = groq`{
  "settings": *[_type == "siteSettings"][0],
  "locations": *[_type == "location"] | order(name asc),
  "services": *[_type == "service"] | order(title asc),
  "providers": *[_type == "provider"] | order(name asc),
  "testimonials": *[_type == "testimonial"] | order(_createdAt desc)[0...6]
}`

export const locationBySlugQuery = groq`*[_type == "location" && slug.current == $slug][0]{
  ...,
  services[]->
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  ...,
  relatedLocations[]->
}`
