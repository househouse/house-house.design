// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable */
import scripts from './assets/js/scripts';
import serviceworker from './assets/js/serviceworker/serviceworker';
import serviceworkerPolyfill from './assets/js/serviceworker/serviceworker-cache-polyfill';
/* eslint-enable */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
