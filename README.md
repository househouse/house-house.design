# House House ([house-house.design](https://house-house.design))

House House is a multidisciplinary design practice in Vancouver, Canada — a joint production between Ben Groulx and Sean Durfee. You can hire us to help you connect with your audience in ways that will enrich their lives.

## Colophon

This valid, semantic <small>HTML5</small>, <small>CSS3</small>, and <small>JS</small> code has been augmented with [Sass](http://sass-lang.com) and [Pug](https://pugjs.org/api/getting-started.html), was compiled with [Harp](https://harpjs.com/), and served up with [GitHub Pages](https://pages.github.com/). Styling was based off of [housecss](https://github.com/househouse/housecss). Other tools and services used during development included [ImageOptim](https://imageoptim.com), [Sketch](https://sketchapp.com/), [Photoshop](https://adobe.com/products/photoshop.html), [Dropbox](http://db.tt/UcJiWAr), [Hound](https://houndci.com/), [scss_lint](https://github.com/brigade/scss-lint), [Browsersync](https://www.browsersync.io/), and [CodeKit3](https://codekitapp.com/).

***

## Contributing

### Features
* [Pug](https://pugjs.org) as a template engine
* [SCSS](http://sass-lang.com) preprocessor for CSS ([autoprefixer](https://github.com/postcss/autoprefixer) included)
* JS linting with [Eslint](https://eslint.org), extends [eslint-config-standard](https://github.com/standard/eslint-config-standard), includes the following plugins:
  * [import](https://github.com/benmosher/eslint-plugin-import)
  * [node](https://github.com/mysticatea/eslint-plugin-node)
  * [promise](https://github.com/xjamundx/eslint-plugin-promise)
  * [compat](https://github.com/amilajack/eslint-plugin-compat)
* CSS linting with [Stylelint](http://stylelint.io)

>Note: There is also the [feature/modern-bundle](https://github.com/alexnoz/webpack-pug-scss-boilerplate/tree/feature/modern-bundle) branch where `webpack` produces [two production bundles](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) (legacy & modern). It is experimental so use it with caution.

#### Prerequisites:
- [Node.js](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/cli/install)
- [Yarn](https://npmjs.com/package/yarn/tutorial)

#### Developing
1. `git clone git@github.com:househouse/house-house.design.git`
2. `cd house-house.design`
3. `yarn install` to fetch all the dependencies
4. `yarn start` to start the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (`localhost:8080` will be opened automatically)
5. 🎉 *Start developing*. When you are done…
6. `yarn run build` to get the prod version

***

## Questions?

Holla at [@bengroulx](https://twitter.com/bengroulx) or [@durfeee](https://twitter.com/Durfeee).
