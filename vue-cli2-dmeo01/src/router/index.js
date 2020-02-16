/**
 * 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../views/about'
import study from '../views/study'
Vue.use(VueRouter)

export default {
  routes: [
    {
      name: 'about',
      path: '/about',
      component: about
    },
    {
      name: 'study',
      path: '/study',
      component: study
    }
  ]
}
