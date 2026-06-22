import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'source', title: 'Source', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'reference', to: [{ type: 'location' }] }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (rule) => rule.min(1).max(5) })
  ]
})
