import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';

import Approach from '@/pages/Approach';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Work from '@/pages/Work';
// import Thanks from '@/pages/Thanks';
// import 404 from '@/pages/404';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/approach',
      name: 'Approach',
      component: Approach,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
    },
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});
