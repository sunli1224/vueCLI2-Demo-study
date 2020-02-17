import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/Home')
const cart = () => import('../views/cart/Cart')
const category = () => import('../views/category/Category')
const profile = () => import('../views/profile/Profile')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/profile',
      component: profile
    }
  ]
})

export default router
