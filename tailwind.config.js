module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  // To pre-import classes (computed)
  safelist: [
    'pt-0', 'pt-1', 'pt-4', 'pt-12', 'pt-28', 'pt-48', 'pt-96'
  ],
  extend: {
    spacing: {
      '6xl': '4rem'
    },
    fontSizes: {
      '6xl': '4rem'
    }
  }
}