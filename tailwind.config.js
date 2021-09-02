module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
    purge: {
        content: [
            './resources/js/**/*.js'
        ]
    },
  theme: {
      colors:{
          gray: {
              '100': '#FFFFFF',
              'background': '#F8F8F8',
              '300': '#DBDBDB',
              '400': '#D1D1D1',
              '450': '#8D8E8F',
              '500': '#525252',
              '600': '#62626234',
              '700': '#62626233',
              'main': '#404040',
              '900': '#4E4E4E',
              '1000': '#171717'
          },
          green: {
              'main': '#83B20F',
              'secondary': '#688B11',
              'light' : '#d5e4bb'
          },
          white: '#FFFFFF',
          red:{
              'main': '#CC6467',
              'secondary': '#843538',
              'light': '#DD9394',
          },
          black: '#000'
      },
      extend: {
          spacing: {
              '11/20': '55%',
          }
      },
      borderRadius: {
          'none': '0',
          'sm': '0.125rem',
          'md': '0.375rem',
          'lg': '0.5rem',
          'full': '9999px',
          'large': '12px',
          'xl': '6.5rem'
      }
  },
  variants: {},
  plugins: [],
}
