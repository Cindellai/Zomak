import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string', initialValue: 'ZOMAK Medical' }),
    defineField({ name: 'primaryPhone', title: 'Primary Phone', type: 'string' }),
    defineField({ name: 'bookingUrl', title: 'Global Booking URL', type: 'url' }),
    defineField({ name: 'announcement', title: 'Announcement Bar', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Default Meta Description', type: 'text', rows: 3 })
    ,
    defineField({
      name: 'homeHero',
      title: 'Homepage — Hero',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Main Heading', type: 'string', initialValue: 'Walk-In Clinics and Family Doctors Across Calgary and Cochrane' }),
        defineField({ name: 'accentTitle', title: 'Accent Heading', type: 'string', initialValue: 'Care made simple' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, initialValue: 'Find same-day medical care or walk-in, register with a family physician, complete an immigration or visa medical, or access referral-based specialist care through five convenient ZOMAK locations.' }),
        defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Background Image Alt Text', type: 'string' }),
        defineField({ name: 'primaryLabel', title: 'Primary Button Label', type: 'string' }),
        defineField({ name: 'primaryHref', title: 'Primary Button Link', type: 'string' }),
        defineField({ name: 'secondaryLabel', title: 'Secondary Button Label', type: 'string' }),
        defineField({ name: 'secondaryHref', title: 'Secondary Button Link', type: 'string' })
      ]
    }),
    defineField({
      name: 'homeWalkIns',
      title: 'Homepage — Walk-ins',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Heading', type: 'string' }),
        defineField({ name: 'firstParagraph', title: 'First Paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'secondParagraph', title: 'Second Paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'buttonHref', title: 'Button Link', type: 'string' })
      ]
    }),
    defineField({
      name: 'homeAbout',
      title: 'Homepage — About',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Section Label', type: 'string' }),
        defineField({ name: 'statement', title: 'Main Statement', type: 'text', rows: 5 }),
        defineField({ name: 'leftImage', title: 'Left Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'leftImageAlt', title: 'Left Image Alt Text', type: 'string' }),
        defineField({ name: 'rightImage', title: 'Right Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'rightImageAlt', title: 'Right Image Alt Text', type: 'string' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'buttonHref', title: 'Button Link', type: 'string' }),
        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          validation: (rule) => rule.max(4),
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'value', title: 'Value', type: 'string' }),
              defineField({ name: 'label', title: 'Label', type: 'string' })
            ],
            preview: { select: { title: 'value', subtitle: 'label' } }
          }]
        })
      ]
    }),
    defineField({
      name: 'homeServices',
      title: 'Homepage — Services',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'ZOMAK Services' }),
        defineField({
          name: 'cards',
          title: 'Homepage Service Cards',
          description: 'The seven visible card placements, in display order. A service may be selected more than once.',
          type: 'array',
          validation: (rule) => rule.max(7),
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'service', title: 'Service', type: 'reference', to: [{ type: 'service' }], validation: (rule) => rule.required() }),
              defineField({ name: 'displayTitle', title: 'Card Title Override', type: 'string', description: 'Optional. Leave blank to use the service title.' }),
              defineField({ name: 'href', title: 'Custom Card Link', type: 'string', description: 'Optional. Use for category landing pages such as /services/zomak-home-care.' })
            ],
            preview: { select: { title: 'displayTitle', subtitle: 'service.title', media: 'service.image' } }
          }]
        })
      ]
    }),
    defineField({
      name: 'homeFamilyPractice',
      title: 'Homepage — Family Practice Feature',
      type: 'object',
      fields: [
        defineField({ name: 'headingBefore', title: 'Heading Before Accent', type: 'string' }),
        defineField({ name: 'headingAccent', title: 'Accent Word', type: 'string' }),
        defineField({ name: 'headingAfter', title: 'Heading After Accent', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'buttonHref', title: 'Button Link', type: 'string' })
      ]
    }),
    defineField({
      name: 'homeHowItWorks',
      title: 'Homepage — How It Works',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'accent', title: 'Accent Word', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          validation: (rule) => rule.max(4),
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
              defineField({ name: 'cta', title: 'Link Label', type: 'string' }),
              defineField({ name: 'href', title: 'Link', type: 'string' }),
              defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
              defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' })
            ],
            preview: { select: { title: 'title', subtitle: 'cta', media: 'image' } }
          }]
        })
      ]
    }),
    defineField({
      name: 'homeAesthetics',
      title: 'Homepage — Griffin Road Aesthetics',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Section Label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'buttonHref', title: 'Button Link', type: 'string' })
      ]
    }),
    defineField({
      name: 'homeLocations',
      title: 'Homepage — Locations',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' })
      ]
    }),
    defineField({
      name: 'homeReviews',
      title: 'Homepage — Reviews',
      type: 'object',
      fields: [
        defineField({ name: 'headingNumber', title: 'Heading Number', type: 'string' }),
        defineField({ name: 'headingAccent', title: 'Heading Accent', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
      ]
    }),
    defineField({
      name: 'homeFaq',
      title: 'Homepage — Frequently Asked Questions',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'FAQs' }),
        defineField({
          name: 'items',
          title: 'Questions',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'question', title: 'Question', type: 'string' }),
              defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 })
            ],
            preview: { select: { title: 'question', subtitle: 'answer' } }
          }]
        })
      ]
    }),
    defineField({
      name: 'homeFinalCta',
      title: 'Homepage — Final Call to Action',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'text', rows: 2 }),
        defineField({ name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageAlt', title: 'Background Image Alt Text', type: 'string' }),
        defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
        defineField({ name: 'buttonHref', title: 'Button Link', type: 'string' })
      ]
    })
  ]
})
