import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';

import Approach from '@/pages/Approach';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Housemates from '@/pages/Housemates';
import Thanks from '@/pages/Thanks';
import Work from '@/pages/Work';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/approach',
      name: 'Approach',
      component: Approach,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
    },
    {
      path: '/housemates',
      name: 'Housemates',
      component: Housemates,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks,
    },
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});
