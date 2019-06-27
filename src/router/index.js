import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';

import Home from '../pages/Home.vue';
import Approach from '../pages/Approach.vue';
import Work from '../pages/Work.vue';
import Housemates from '../pages/Housemates.vue';
import Contact from '../pages/Contact.vue';
import Thanks from '../pages/Thanks.vue';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/approach',
            name: 'Approach',
            component: Approach
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/housemates',
            name: 'Housemates',
            component: Housemates
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/thanks',
            name: 'Thanks',
            component: Thanks
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});
