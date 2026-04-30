// ── Partnerships Schema ────────────────────────────────────────
export default {
  name: 'partnership',
  title: '🤝 Partnerships',
  type: 'document',
  fields: [
    { name: 'name',        title: 'Partner Name',    type: 'string' },
    { name: 'logo',        title: 'Partner Logo',    type: 'image', options: { hotspot: true } },
    { name: 'website',     title: 'Website URL',     type: 'url'    },
    { name: 'description', title: 'Short Description', type: 'text' },
    {
      name: 'category', title: 'Category', type: 'string',
      options: { list: ['University','Embassy','Media','Corporate','NGO','Government','Other'] },
    },
    { name: 'country',    title: 'Country',          type: 'string' },
    { name: 'featured',   title: 'Show on Homepage', type: 'boolean', initialValue: true },
    { name: 'orderRank',  title: 'Display Order',    type: 'number'  },
  ],
  orderings: [{ title: 'Display Order', name: 'orderRankAsc', by: [{ field: 'orderRank', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'logo' },
  },
};
