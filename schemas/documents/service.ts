import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Card and Page Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({ name: 'featuredOnHomepage', title: 'Feature on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'patientIntent', title: 'Patient Search Intent', type: 'string' }),
    defineField({ name: 'body', title: 'Page Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'highlights', title: 'Service Highlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'whatToBring', title: 'What Patients Should Bring', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'visitFlow', title: 'What to Expect', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'relatedLocations', title: 'Related Locations', type: 'array', of: [{ type: 'reference', to: [{ type: 'location' }] }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 })
  ]
})
