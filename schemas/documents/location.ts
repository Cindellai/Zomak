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
    defineField({ name: 'postalCode', title: 'Postal Code', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'fax', title: 'Fax', type: 'string' }),
    defineField({
      name: 'walkInStatus',
      title: 'Walk-in Live Status',
      type: 'string',
      description: 'Update this throughout the day. It appears in the sticky banner on this clinic page.',
      initialValue: 'Walk-ins now',
      options: {
        list: ['Walk-ins now', 'Call for walk-in availability', 'At capacity', 'Closed'],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'waitTime',
      title: 'Estimated Walk-in Wait',
      type: 'string',
      description: 'The current estimated wait shown beside the live status. Publish the clinic document after updating.',
      initialValue: 'Short wait',
      options: {
        list: ['No wait', 'Short wait', '15–30 minutes', '30–60 minutes', 'More than 60 minutes', 'Call for current wait']
      }
    }),
    defineField({ name: 'bookingUrl', title: 'Booking URL', type: 'url' }),
    defineField({ name: 'directionsUrl', title: 'Directions URL', type: 'url' }),
    defineField({ name: 'googleBusinessUrl', title: 'Google Business Profile URL', type: 'url' }),
    defineField({ name: 'hours', title: 'Hours', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'services', title: 'Services', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'heroImageAlt', title: 'Hero Image Alt Text', type: 'string' }),
    defineField({ name: 'philosophy', title: 'Clinic Statement', type: 'text', rows: 3, description: 'Large statement displayed below the clinic introduction.' }),
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
