// 对外暴露配置的常量路由
import { RouteRecordRaw } from 'vue-router'
export const constantRoute: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login'    // 命名路由
    },
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'layout'    // 命名路由
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404'    // 命名路由
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any'    // 命名路由
    }
]