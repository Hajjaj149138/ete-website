// ── Study Destination Schema ───────────────────────────────────
export default {
  name: 'destination',
  title: '🌍 Study Destinations',
  type: 'document',
  fields: [
    { name: 'name',     title: 'Country Name',  type: 'string' },
    { name: 'slug',     title: 'URL Slug (e.g. australia)', type: 'slug', options: { source: 'name' } },
    { name: 'color',    title: 'Brand Color (hex e.g. #00843D)', type: 'string' },
    { name: 'tagline',  title: 'Tagline',       type: 'string' },
    { name: 'heroImage',title: 'Hero Image',    type: 'image', options: { hotspot: true } },
    { name: 'overview', title: 'Overview Text', type: 'text'   },
    { name: 'flagCode', title: 'Flag Code (2-letter e.g. au)', type: 'string' },
    { name: 'tuition',  title: 'Tuition Range', type: 'string' },
    { name: 'visa',     title: 'Visa Processing Time', type: 'string' },
    { name: 'ieltsMin', title: 'IELTS Minimum', type: 'string' },
    { name: 'ieltsNote',title: 'IELTS Note',    type: 'string' },
    { name: 'uniCount', title: 'University Count (e.g. 43 Universities)', type: 'string' },
    { name: 'orderRank',title: 'Display Order (1=first)', type: 'number' },
    {
      name: 'highlights', title: '⭐ Why Study Here', type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'cities', title: '🏙️ Top Cities', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'City Name',        type: 'string' },
          { name: 'desc', title: 'City Description', type: 'text'   },
        ],
      }],
    },
    {
      name: 'courses', title: '📚 Popular Courses', type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'universities', title: '🏛️ Partner Universities', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name',     title: 'University Name',  type: 'string' },
          { name: 'location', title: 'City / Location',  type: 'string' },
          { name: 'rank',     title: 'Display Rank',     type: 'number' },
          { name: 'spec',     title: 'Specialty / Note', type: 'string' },
        ],
      }],
    },
    {
      name: 'programs', title: '🎓 Study Programs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'level',    title: 'Level (e.g. Bachelor)', type: 'string' },
          { name: 'duration', title: 'Duration (e.g. 3-4 Years)', type: 'string' },
          { name: 'icon',     title: 'Emoji Icon',           type: 'string' },
        ],
      }],
    },
    {
      name: 'intakes', title: '📅 Intake Periods', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'month',    title: 'Month Code (e.g. SEP)', type: 'string' },
          { name: 'label',    title: 'Label (e.g. Semester 1)', type: 'string' },
          { name: 'deadline', title: 'Application Deadline',  type: 'string' },
          { name: 'note',     title: 'Additional Note',       type: 'string' },
        ],
      }],
    },
    {
      name: 'langReq', title: '📋 Language Requirements', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'level', title: 'Program Level',    type: 'string' },
          { name: 'ielts', title: 'IELTS Score',      type: 'string' },
          { name: 'toefl', title: 'TOEFL iBT Score',  type: 'string' },
          { name: 'pte',   title: 'PTE Score',        type: 'string' },
          { name: 'notes', title: 'Notes',            type: 'string' },
        ],
      }],
    },
    {
      name: 'docs', title: '📁 Required Documents', type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'living', title: '💰 Monthly Living Cost', type: 'object',
      fields: [
        { name: 'accommodation', title: 'Accommodation', type: 'string' },
        { name: 'food',          title: 'Food',          type: 'string' },
        { name: 'transport',     title: 'Transport',     type: 'string' },
        { name: 'total',         title: 'Total/Month',   type: 'string' },
      ],
    },
    { name: 'workDuring', title: '💼 Work Rights During Study', type: 'string' },
    { name: 'postStudy',  title: '🎓 Post-Study Visa',         type: 'string' },
    {
      name: 'scholarships', title: '🏆 Scholarships', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Scholarship Name', type: 'string' },
          { name: 'desc', title: 'Description',      type: 'text'   },
        ],
      }],
    },
    {
      name: 'faqs', title: '❓ FAQs', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer',   title: 'Answer',   type: 'text'   },
        ],
      }],
    },
    {
      name: 'seo', title: '🔍 SEO', type: 'object',
      fields: [
        { name: 'metaTitle',       title: 'Meta Title',       type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text'   },
        { name: 'keywords',        title: 'Keywords',         type: 'string' },
      ],
    },
  ],
  orderings: [{ title: 'Display Order', name: 'orderRankAsc', by: [{ field: 'orderRank', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'tagline', media: 'heroImage' },
  },
};
