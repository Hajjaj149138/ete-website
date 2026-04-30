// ── Home Page Schema ───────────────────────────────────────────
export default {
  name: 'homePage',
  title: '🏠 Home Page',
  type: 'document',
  fields: [
    {
      name: 'hero', title: '🎯 Hero Section', type: 'object',
      fields: [
        { name: 'badge',       title: 'Top Badge Text',   type: 'string' },
        { name: 'headline',    title: 'Main Headline',    type: 'text'   },
        { name: 'subheadline', title: 'Sub Headline',     type: 'text'   },
        { name: 'cta1',        title: 'Button 1 Text',    type: 'string' },
        { name: 'cta2',        title: 'Button 2 Text',    type: 'string' },
        { name: 'bgImage',     title: 'Background Image', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'marqueeItems', title: '📢 Scrolling Banner Text', type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "🎓 98% Visa Success Rate"',
    },
    {
      name: 'whyUs', title: '⭐ Why Choose Us', type: 'object',
      fields: [
        { name: 'title',    title: 'Section Title',    type: 'string' },
        { name: 'subtitle', title: 'Section Subtitle', type: 'string' },
        {
          name: 'items', title: 'Cards', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon',  title: 'Icon Name (lucide)', type: 'string', description: 'e.g. ShieldCheck, GraduationCap, Star' },
              { name: 'title', title: 'Card Title',         type: 'string' },
              { name: 'desc',  title: 'Card Description',   type: 'text'   },
            ],
          }],
        },
      ],
    },
    {
      name: 'process', title: '⚡ How It Works Steps', type: 'object',
      fields: [
        { name: 'title',    title: 'Section Title',    type: 'string' },
        { name: 'subtitle', title: 'Section Subtitle', type: 'string' },
        {
          name: 'steps', title: 'Steps', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'number', title: 'Step Number', type: 'string' },
              { name: 'title',  title: 'Step Title',  type: 'string' },
              { name: 'desc',   title: 'Description', type: 'text'   },
            ],
          }],
        },
      ],
    },
    {
      name: 'testimonials', title: '💬 Student Testimonials', type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        {
          name: 'items', title: 'Testimonials', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name',       title: 'Student Name',       type: 'string' },
              { name: 'photo',      title: 'Photo',              type: 'image', options: { hotspot: true } },
              { name: 'country',    title: 'Country',            type: 'string' },
              { name: 'university', title: 'University',         type: 'string' },
              { name: 'rating',     title: 'Rating (1-5)',       type: 'number' },
              { name: 'quote',      title: 'Quote',              type: 'text'   },
            ],
          }],
        },
      ],
    },
    {
      name: 'universityCarousel', title: '🏛️ University Carousel', type: 'object',
      fields: [
        { name: 'title',    title: 'Section Title',    type: 'string' },
        { name: 'subtitle', title: 'Section Subtitle', type: 'string' },
        {
          name: 'row1', title: 'Row 1 Universities', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name',    title: 'University Name', type: 'string' },
              { name: 'country', title: 'Country (with flag emoji)', type: 'string' },
              { name: 'logo',    title: 'Logo Image', type: 'image', options: { hotspot: true } },
            ],
          }],
        },
        {
          name: 'row2', title: 'Row 2 Universities', type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name',    title: 'University Name', type: 'string' },
              { name: 'country', title: 'Country (with flag emoji)', type: 'string' },
              { name: 'logo',    title: 'Logo Image', type: 'image', options: { hotspot: true } },
            ],
          }],
        },
      ],
    },
  ],
  __experimental_actions: ['update', 'publish'],
};
