import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Process from '@/pages/Process';
import Contact from '@/pages/Contact';

// import Thanks from '@/pages/Thanks';
// import 404 from '@/pages/404';

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
