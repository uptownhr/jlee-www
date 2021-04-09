export function htmlHead({title, description}) {
  return {
    title,
    meta: [
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'description',
        content: description
      },
      {
        property: 'og:description',
        content: description
      },
      /* {
        property: 'og:image',
        content: 'https://www.spacedtime.com/spacedtime-logo.png'
      }, */

      /* { property: 'og:image:type', content: 'image/png' } */
    ]
  }
}
