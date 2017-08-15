import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/vHome/vHome';
import NotFound from '@/components/vNotFound/vNotFound';
import Thanks from '@/components/vThanks/vThanks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks,
    },
  ],
});
