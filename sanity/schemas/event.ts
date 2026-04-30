// ── Events Schema ──────────────────────────────────────────────
export default {
  name: 'event',
  title: '📅 Events',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Event Title',      type: 'string' },
    {
      name: 'type', title: 'Event Type', type: 'string',
      options: { list: ['Seminar','Workshop','Webinar','Fair','Info Session','Other'] },
    },
    { name: 'description', title: 'Description',      type: 'text'   },
    { name: 'location',    title: 'Location / Venue', type: 'string' },
    { name: 'startDate',   title: 'Start Date & Time',type: 'datetime' },
    { name: 'endDate',     title: 'End Date & Time',  type: 'datetime' },
    { name: 'registrationLink', title: 'Registration Link', type: 'url' },
    { name: 'image',       title: 'Cover Image',      type: 'image', options: { hotspot: true } },
    { name: 'featured',    title: 'Featured Event',   type: 'boolean', initialValue: false },
    { name: 'isOnline',    title: 'Online Event?',    type: 'boolean', initialValue: false },
    { name: 'seats',       title: 'Available Seats',  type: 'number'  },
    { name: 'tags',        title: 'Tags',             type: 'array', of: [{ type: 'string' }] },
  ],
  orderings: [{ title: 'Event Date (Newest First)', name: 'startDateDesc', by: [{ field: 'startDate', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'startDate', media: 'image' },
  },
};
