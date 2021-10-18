import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'

const resolvePath = (path: string) => `/manage/${path}`

const routes: Array<RouteRecordRaw> = [
    {
        path: resolvePath('home'),
        name: 'home',
        component: home
    },
    {
        path: resolvePath('test'),
        name: 'test',
        component: () => import('../views/test')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
