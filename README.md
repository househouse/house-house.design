# House House ([house-house.design](https://house-house.design))

House House is a multidisciplinary design studio in Vancouver, Canada.



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

#### Pushing to production
We use [Now](//now.sh) for our blue-green deployment system. Bother @durfee to make new deployments.



***

## Questions?

[hello@house-house.design](mailto:hello@house-house.design)
[@bengroulx](https://twitter.com/bengroulx)
[@durfeee](https://twitter.com/Durfeee).
