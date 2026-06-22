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
    defineField({ name: 'patientIntent', title: 'Patient Search Intent', type: 'string' }),
    defineField({ name: 'body', title: 'Page Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'relatedLocations', title: 'Related Locations', type: 'array', of: [{ type: 'reference', to: [{ type: 'location' }] }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 })
  ]
})
