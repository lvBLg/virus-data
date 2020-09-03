import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/aboard',
    component: () => import('@/views/aboard/aboard.vue')
  },
  {
    path: '/broadcast',
    component: () => import('@/views/broadcast/broadcast.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
