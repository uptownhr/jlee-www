export function htmlHead({ title, description }) {
  return {
    title,
    meta: [
      {
        property: 'og:title',
        content: title,
        hid: 'title',
      },
      {
        property: 'description',
        name: 'description',
        content: description,
        hid: 'description',
      },
      {
        property: 'og:description',
        content: description,
        hid: 'og:description',
      },
      /* {
        property: 'og:image',
        content: 'https://www.spacedtime.com/spacedtime-logo.png'
      }, */

      /* { property: 'og:image:type', content: 'image/png' } */
    ],
  }
}
