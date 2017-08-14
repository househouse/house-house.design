import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/views/NotFound'
import Home from '@/views/Home'
import Thanks from '@/views/Thanks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks,
    },
  ]
})
