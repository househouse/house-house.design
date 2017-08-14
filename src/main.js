// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import scripts from './assets/scripts/scripts';
import serviceworker from './assets/scripts/serviceworker/serviceworker';
import serviceworkerPolyfill from './assets/scripts/serviceworker/serviceworker-cache-polyfill';
/* eslint-enable */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
