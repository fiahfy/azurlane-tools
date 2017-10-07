const publicPath = process.env.NODE_ENV === 'production' ? '/azurlane-calc/' : '/'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'azurlane-calc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Azurlane calculator' }
    ],
    link: [
      { rel: 'mask-icon', color: 'black', href: publicPath + 'favicon.svg' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Router configuration
  */
  router: {
    base: publicPath
  }
}
