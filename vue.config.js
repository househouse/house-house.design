const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    },
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [
          '/',
          '/approach',
          '/work',
          '/housemates',
          '/contact',
          '/thanks',
          '/approach'
        ]
      })
    ]
  },
  css: {
    sourceMap: true
  }
};
