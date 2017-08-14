import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/vHome/v-home'
import NotFound from '@/components/vNotFound/v-not-found'
import Thanks from '@/components/vThanks/v-thanks'

Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})
