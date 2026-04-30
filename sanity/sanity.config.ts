import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'easy-to-europe',
  title: 'Easy To Europe — CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Easy To Europe CMS')
          .items([
            S.listItem().title('⚙️ Site Configuration').id('siteConfig')
              .child(S.document().schemaType('siteConfig').documentId('siteConfig')),
            S.listItem().title('🏠 Home Page').id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('👥 About Page').id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem().title('🛠️ Services Page').id('servicesPage')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
            S.divider(),
            S.documentTypeListItem('destination').title('🌍 Study Destinations'),
            S.documentTypeListItem('event').title('📅 Events'),
            S.documentTypeListItem('partnership').title('🤝 Partnerships'),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});
