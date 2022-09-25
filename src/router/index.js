import Vue from 'vue'
import VueRouter from 'vue-router'
import pet from '@/router/modules/pet'
import ucenter from '@/router/modules/ucenter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/pet'
  },
  {
    path:'/merchants',
    component:()=>import('@/views/City.vue')
  },
  {
    path:'/news',
    component:()=>import('@/views/news.vue')
  },
  {
    path:'/lookatall',
    component:()=>import('@/views/LookAtAll.vue')
  },
  ...pet,
  ...ucenter
]
const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
})
export default router
