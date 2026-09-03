import { defineField, defineType } from 'sanity'

export const serviceCategory = defineType({
  name: 'serviceCategory',
  title: 'Service Categories',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Navigation Label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Category Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Category Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({ name: 'navigationOrder', title: 'Navigation Order', type: 'number', validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'showInNavigation', title: 'Show in Services Dropdown', type: 'boolean', initialValue: true })
  ],
  orderings: [{ title: 'Navigation order', name: 'navigationOrder', by: [{ field: 'navigationOrder', direction: 'asc' }] }]
})
