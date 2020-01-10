import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => {
    window.console.log('next: ', next);
    window.console.log('to: ', to);
    window.console.log('from: ', from);
    next()
})

export default router;