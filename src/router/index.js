
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ArticleView from '@/views/ArticleView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainView
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: ArticleView
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/BlogView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/404errorView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
