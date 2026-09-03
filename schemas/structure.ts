import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('ZOMAK Website Content')
    .items([
      S.listItem()
        .title('Homepage & Site Settings')
        .schemaType('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('walkInStatus').title('Walk-in Status Updates'),
      S.divider(),
      S.documentTypeListItem('location').title('Clinic Locations'),
      S.documentTypeListItem('serviceCategory').title('Service Categories'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('provider').title('Providers'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('blogPost').title('Articles')
    ])
