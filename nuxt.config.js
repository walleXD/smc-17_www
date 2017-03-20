module.exports = {
  head: {
    titleTemplate: '%s - SMC\'17',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', rel: 'stylesheet', type: 'text/css'},
      { href: 'https://cdn.materialdesignicons.com/1.8.36/css/materialdesignicons.min.css', rel: 'stylesheet', type: 'text/css'}
    ]
  },
  css: [
    { src: '~assets/styles/main.styl', lang: 'stylus' }
  ],
  plugins: ['~plugins/vuetify'],
  build: {
    vendors: ['vuetify']
  }
}
