import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/BasicPage.vue') },
    { path: '/if', component: () => import('@/views/IfPage.vue') },
    { path: '/for', component: () => import('@/views/ForPage.vue') },
    { path: '/list', component: () => import('@/views/ListPage.vue') },
    { path: '/other', component: () => import('@/views/OtherPage.vue') },
    { path: '/:pathMatch(.*)', component: () => import('@/views/404.vue') },
  ],
})

export default router
