import { defineField, defineType } from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Clinic Locations',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Location Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (rule) => rule.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'city', title: 'City', type: 'string' }),
    defineField({ name: 'province', title: 'Province', type: 'string', initialValue: 'AB' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'fax', title: 'Fax', type: 'string' }),
    defineField({ name: 'bookingUrl', title: 'Booking URL', type: 'url' }),
    defineField({ name: 'directionsUrl', title: 'Directions URL', type: 'url' }),
    defineField({ name: 'googleBusinessUrl', title: 'Google Business Profile URL', type: 'url' }),
    defineField({ name: 'hours', title: 'Hours', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'services', title: 'Services', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({ name: 'localKeyword', title: 'Local Keyword', type: 'string' })
      ]
    })
  ]
})
