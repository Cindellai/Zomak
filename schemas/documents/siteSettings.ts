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
  ]
})
