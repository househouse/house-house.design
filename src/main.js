import Vue from 'vue';
import App from './App.vue';
import VScrollLock from 'v-scroll-lock';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VScrollLock);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
