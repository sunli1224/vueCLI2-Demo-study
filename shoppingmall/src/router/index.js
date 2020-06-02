import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('views/home/Home')
const cart = () => import('views/cart/Cart')
const category = () => import('views/category/Category')
const profile = () => import('views/profile/Profile')
const news = () => import('views/news/news')
const pop = () => import('views/pop/PopPage')
const choose = () => import('views/choose/Choose')

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
      component: home,
      children: [
        {
          path: '/home',
          redirect: '/home/pop'
        },
        {
          path: '/home/news',
          component: news
        },
        {
          path: '/home/choose',
          component: choose
        },
        {
          path: '/home/pop',
          component: pop
        }
      ]
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
