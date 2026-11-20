import type { StructureResolver } from 'sanity/structure'

// One fixed status document per clinic (IDs match sanity/walk-in-statuses.json), so staff tap their clinic and edit.
const walkInClinics = [
  { id: 'walkInStatus.griffin-road', title: 'Griffin Road' },
  { id: 'walkInStatus.centre-street', title: 'Centre St' },
  { id: 'walkInStatus.lewisburg', title: 'Lewisburg' },
  { id: 'walkInStatus.northmount', title: 'Northmount' },
  { id: 'walkInStatus.fairview', title: 'Fairview' }
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('ZOMAK Website Content')
    .items([
      S.listItem()
        .title('Homepage & Site Settings')
        .schemaType('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Walk-in Status Updates')
        .id('walk-ins')
        .child(
          S.list()
            .title('Update a clinic\'s walk-in status')
            .items(
              walkInClinics.map(({ id, title }) =>
                S.listItem().title(title).id(id).child(S.document().schemaType('walkInStatus').documentId(id).title(title))
              )
            )
        ),
      S.divider(),
      S.documentTypeListItem('location').title('Clinic Locations'),
      S.documentTypeListItem('serviceCategory').title('Service Categories'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('provider').title('Providers'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('blogPost').title('Articles')
    ])
