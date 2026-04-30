// ── Services Page Schema ───────────────────────────────────────
export default {
  name: 'servicesPage',
  title: '🛠️ Services Page',
  type: 'document',
  fields: [
    {
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'badge', title: 'Badge Text', type: 'string' },
        { name: 'title', title: 'Title',      type: 'string' },
        { name: 'sub',   title: 'Subtitle',   type: 'text'   },
      ],
    },
    {
      name: 'steps', title: '📋 Service Steps', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Step Number', type: 'string' },
          { name: 'icon',   title: 'Icon Name',   type: 'string' },
          { name: 'title',  title: 'Step Title',  type: 'string' },
          { name: 'items',  title: 'Sub Items',   type: 'array', of: [{ type: 'string' }] },
        ],
      }],
    },
  ],
  __experimental_actions: ['update', 'publish'],
};
