import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Process from '@/pages/Process';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }, {
      path: '/process',
      name: 'Process',
      component: Process,
    },
  ],
});
