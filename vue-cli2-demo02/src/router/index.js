import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import Main from '../components/Main'
Vue.use(Router)

const Home = () => import('../components/Home')
const Main = () => import('../components/Main')
const moudle = () => import('../components/Moudles')
const news = () => import('../views/News')
const msg = () => import('../views/messages')


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/main/:id',
      component: Main
    },
    {
      path: '/main',
      redirect: '/main/java'
    },
    {
      path: '/moudle',
      component: moudle,
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: news,
          meta: {
            title: "新闻"
          },
          beforeEnter(to,from,next) {//路由独享守卫
            document.title = to.matched[1].meta.title
            next()
          }
        },
        {
          path: 'msg',
          component: msg,
          meta: {
            title: "消息"
          }
          ,
          beforeEnter(to,from,next) {//路由独享守卫
            document.title = to.matched[1].meta.title
            next()
          }
        }
      ]
    }
  ]
})
//全局前置守卫
router.beforeEach(function (to, from, next) {
  console.log("全局前置钩子")
  // console.log(to);
  // document.title = to.matched[1].meta.title
  next()
})
//全局后置钩子
router.afterEach((to,from) => {
  console.log("全局后置钩子")
})

export default router
