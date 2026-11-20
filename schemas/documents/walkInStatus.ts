import { defineField, defineType } from 'sanity'

import { busynessLevels } from '../../lib/walkInStatus'

export const walkInStatus = defineType({
  name: 'walkInStatus',
  title: 'Walk-in Status Updates',
  type: 'document',
  description:
    'Update and Publish whenever the waiting room changes. Open clinic pages refresh within about 30 seconds. A status not updated today shows "Call to confirm walk-in availability".',
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
      name: 'busyness',
      title: 'How busy is the clinic right now?',
      type: 'string',
      initialValue: 'quiet',
      options: {
        list: busynessLevels.map(({ value, title }) => ({ value, title })),
        layout: 'radio'
      }
    }),
    defineField({
      name: 'waitTime',
      title: 'Estimated Wait',
      type: 'string',
      initialValue: 'Short wait',
      options: {
        list: ['No wait', 'Short wait', '15–30 minutes', '30–60 minutes', 'Long wait', 'More than 60 minutes', 'Call for current wait', 'Not accepting walk-ins'],
        layout: 'radio'
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
