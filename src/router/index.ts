import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home'
import About from '../views/about'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
