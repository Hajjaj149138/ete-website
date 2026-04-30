// ── About Page Schema ──────────────────────────────────────────
export default {
  name: 'aboutPage',
  title: '👥 About Page',
  type: 'document',
  fields: [
    {
      name: 'leadership', title: '👔 Leadership Team', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name',     title: 'Full Name',      type: 'string' },
          { name: 'role',     title: 'Role / Title',   type: 'string' },
          { name: 'photo',    title: 'Photo',          type: 'image', options: { hotspot: true } },
          { name: 'years',    title: 'Years Experience', type: 'string' },
          { name: 'quote',    title: 'Quote',          type: 'text'   },
          { name: 'linkedin', title: 'LinkedIn URL',   type: 'url'    },
        ],
      }],
    },
    {
      name: 'team', title: '🧑‍💼 Team Members', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name',     title: 'Full Name',       type: 'string' },
          { name: 'role',     title: 'Role / Position', type: 'string' },
          { name: 'photo',    title: 'Photo',           type: 'image', options: { hotspot: true } },
          { name: 'nickname', title: 'Nickname',        type: 'string' },
          { name: 'trait',    title: 'Trait Tag',       type: 'string' },
          { name: 'linkedin', title: 'LinkedIn URL',    type: 'url'    },
        ],
      }],
    },
    {
      name: 'mission', title: '🎯 Mission Section', type: 'object',
      fields: [
        { name: 'title',  title: 'Title',    type: 'string' },
        { name: 'sub',    title: 'Subtitle', type: 'text'   },
        {
          name: 'points', title: 'Points', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Point Title', type: 'string' },
              { name: 'desc',  title: 'Description', type: 'text'   },
            ],
          }],
        },
      ],
    },
    {
      name: 'vision', title: '👁️ Vision Section', type: 'object',
      fields: [
        { name: 'title',  title: 'Title',    type: 'string' },
        { name: 'sub',    title: 'Subtitle', type: 'text'   },
        {
          name: 'points', title: 'Points', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Point Title', type: 'string' },
              { name: 'desc',  title: 'Description', type: 'text'   },
            ],
          }],
        },
      ],
    },
    {
      name: 'whyUs', title: '⭐ Why Choose Us', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon',  title: 'Emoji Icon',  type: 'string' },
          { name: 'title', title: 'Title',       type: 'string' },
          { name: 'desc',  title: 'Description', type: 'text'   },
        ],
      }],
    },
  ],
  __experimental_actions: ['update', 'publish'],
};
