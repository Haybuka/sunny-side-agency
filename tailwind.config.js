module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    inset: {
        '0': 0,
        auto: 'auto',
        '1/2': '50%',
        '1/4' : '30%'
    },
    height: {
        fullv:'100%',
         md : '400px',
         lg: '500px',
         xl: '600px'
      },
    extend: {
      backgroundImage : theme => ({
        'banner-bg' : "url('../images/desktop/image-header.jpg')",
        'graphic': "url('../images/desktop/image-graphic-design.jpg')",
        'photography': "url('../images/desktop/image-photography.jpg')"
      }),
      colors : {
        primary : 'hsl(200, 100%, 62%)',
        secondary : {
          100 : 'hsl(232, 10%, 55%)',
          200 : 'hsl(210, 4%, 67%)',
          300 : 'hsl(213, 9%, 39%)',
          400 : 'hsl(212, 27%, 19%)',
          500 : 'hsl(198, 62%, 26%)',
          600 : 'hsl(167, 40%, 24%)',
          700 : 'hsl(7, 99%, 70%)',
          800 : 'hsl(51, 100%, 49%)',
          900 : 'hsl(168, 34%, 41%)',
          901 : '#90d4c5'

        }
      },
      fontFamily : {
        primary :["'Barlow', sans-serif"],
        secondary : ["'Fraunces', serif;"]
      }
    },
  },
  variants: {},
  plugins: [],
}
