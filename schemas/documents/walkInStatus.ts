import { defineField, defineType } from 'sanity'

export const walkInStatus = defineType({
  name: 'walkInStatus',
  title: 'Walk-in Status Updates',
  type: 'document',
  fields: [
    defineField({
      name: 'clinic',
      title: 'Clinic',
      type: 'reference',
      to: [{ type: 'location' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Walk-in Availability',
      type: 'string',
      initialValue: 'Walk-ins now',
      options: {
        list: ['Walk-ins now', 'Call for walk-in availability', 'At capacity', 'No walk-ins available', 'Closed'],
        layout: 'radio'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'waitTime',
      title: 'Estimated Wait',
      type: 'string',
      initialValue: 'Short wait',
      options: {
        list: ['No wait', 'Short wait', '15–30 minutes', '30–60 minutes', 'Long wait', 'More than 60 minutes', 'Call for current wait', 'Not accepting walk-ins']
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'staffNote',
      title: 'Internal Staff Note',
      type: 'string',
      description: 'Optional internal note. This is not displayed on the public website.'
    })
  ],
  preview: {
    select: { title: 'clinic.name', status: 'status', waitTime: 'waitTime' },
    prepare({ title, status, waitTime }) {
      return { title: title || 'Select a clinic', subtitle: `${status || 'Status not set'} · ${waitTime || 'Wait not set'}` }
    }
  }
})
