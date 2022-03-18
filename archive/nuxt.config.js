
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'House House',
    titleTemplate: '%s • A Design Studio', // all titles will be injected into this template
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Ben Groulx, Sean Durfee' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION_CODE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:creator", content: "@durfeee, @bengroulx" },
      { name: "og:url", content: "https://house-house.design" },
      { name: "og:type", content: "website" },
      { name: "og:site_name", content: "House House Design" },
      { name: "theme-color", content: "#4745d1" },
      { name: "msapplication-TileColor", content: "#4745d1" },
      { name: "msapplication-TileImage", content: "/img/apple-icon-144x144.png" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "114x114", href: '/img/apple-icon-114.png' },
      { rel: 'apple-touch-icon', sizes: "144x144", href: '/img/apple-icon-144.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/img/apple-icon-152.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/img/apple-icon-180.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicon-96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/img/favicon-192.png' },
      { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/img/favicon-256.png' },
      { rel: 'icon', type: 'image/png', sizes: '384x384', href: '/img/favicon-384.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/img/favicon-512.png' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4745d1' },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });
    }
  }
}
