import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home1 from '../views/home1.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home1',
        component: home1
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
