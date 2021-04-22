module.exports = {
  purge: {
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
