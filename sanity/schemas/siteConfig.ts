// ── Site Config Schema ─────────────────────────────────────────
export default {
  name: 'siteConfig',
  title: '⚙️ Site Configuration',
  type: 'document',
  fields: [
    { name: 'siteName',    title: 'Site Name',    type: 'string' },
    { name: 'tagline',     title: 'Tagline',      type: 'string' },
    { name: 'description', title: 'Description',  type: 'text'   },
    { name: 'phone',       title: 'Phone',        type: 'string' },
    { name: 'whatsapp',    title: 'WhatsApp Number (numbers only)', type: 'string' },
    { name: 'email',       title: 'Email',        type: 'string' },
    {
      name: 'socials', title: 'Social Links', type: 'object',
      fields: [
        { name: 'facebook',  title: 'Facebook URL',  type: 'url' },
        { name: 'youtube',   title: 'YouTube URL',   type: 'url' },
        { name: 'linkedin',  title: 'LinkedIn URL',  type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
      ],
    },
    {
      name: 'stats', title: '📊 Homepage Stats', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Number (e.g. 1,000+)', type: 'string' },
          { name: 'label',  title: 'Label (e.g. Students Placed)', type: 'string' },
        ],
      }],
    },
    {
      name: 'offices', title: '🏢 Offices', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label',   title: 'Office Name',  type: 'string' },
          { name: 'address', title: 'Address',      type: 'text'   },
          { name: 'phone',   title: 'Phone',        type: 'string' },
          { name: 'hours',   title: 'Working Hours', type: 'string' },
        ],
      }],
    },
  ],
  __experimental_actions: ['update', 'publish'],
};
