import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'category', title: 'Service Category', type: 'string' }),
    defineField({ name: 'headline', title: 'Review Headline', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'source', title: 'Patient Display Name', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'reference', to: [{ type: 'location' }] }),
    defineField({ name: 'googleProfileUrl', title: 'Google Business Profile URL', type: 'url', description: 'Direct link to the clinic profile where this excerpt appears.' }),
    defineField({ name: 'verifiedForPublication', title: 'Approved for publication', type: 'boolean', initialValue: false }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (rule) => rule.min(1).max(5) }),
    defineField({ name: 'featuredOnHomepage', title: 'Feature on Homepage', type: 'boolean', initialValue: true })
  ],
  preview: {
    select: { title: 'headline', subtitle: 'source' }
  }
})
