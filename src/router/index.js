import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Approach from '@/pages/Approach';
import Work from '@/pages/Work';
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
      path: '/approach',
      name: 'Approach',
      component: Approach,
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }, {
      path: '/work',
      name: 'Work',
      component: Work,
    },
  ],
});
