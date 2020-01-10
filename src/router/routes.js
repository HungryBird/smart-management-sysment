const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/pages/login/index.vue')
    },
    {
        name: 'home',
        path: '/',
        component: () => import('@/pages/home/index.vue')
    }
]

export default routes;