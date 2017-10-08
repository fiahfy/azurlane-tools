const publicPath = process.env.NODE_ENV === 'production' ? '/azurlane-tools/' : '/'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Azurlane tools',
    titleTemplate: '%s - Azurlane tools',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Azurlane tools' }
    ],
    link: [
      { rel: 'icon', sizes: '192x192', href: publicPath + 'favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: publicPath + 'apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#FFF' },
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
  },
  /*
  ** Plugins
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
