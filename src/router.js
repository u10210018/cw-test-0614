import { createRouter, createWebHistory } from 'vue-router';
import Home from '~pages/home.vue';

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        // for style check
        // {
        //     path: '/style',
        //     component: () => import('~pages/style.vue')
        // }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
    }
});
