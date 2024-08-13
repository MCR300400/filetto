

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
{
 path: '/',
 name: 'home',
 component: () => import('../views/HomePageView.vue')
},
{
 path: '/about',
 name: 'about',
 component: () => import('../views/AboutView.vue')
},
{
    path: '/game',
    name: 'game',
    component: () => import('../views/GameView.vue')
   }
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL), routes
})

export default router 