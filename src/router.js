import { createRouter, createWebHistory } from 'vue-router';
import Home from '~pages/home.vue';

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/style',
            component: () => import('~pages/style.vue')
        }
    ]
});
