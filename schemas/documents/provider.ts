import { defineField, defineType } from 'sanity'

export const provider = defineType({
  name: 'provider',
  title: 'Providers',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'credentials', title: 'Credentials', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'locations', title: 'Locations', type: 'array', of: [{ type: 'reference', to: [{ type: 'location' }] }] }),
    defineField({ name: 'headshot', title: 'Headshot', type: 'image', options: { hotspot: true } })
  ]
})
