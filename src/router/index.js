import Vue from 'vue'
import VueRouter from 'vue-router'

import Films from '@/views/Films.vue'
import Nowplaying from '@/views/films/Nowplaying.vue'
import Comingsoon from '@/views/films/Comingsoon.vue'
import Detail from '@/views/Detail.vue'

// import Cinemas from '@/views/Cinemas.vue'
import City from '@/views/City'

import Search from '@/views/Search.vue'

import Center from '@/views/Center.vue'
import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
Vue.use(VueRouter) // 注册路由插件,两个全局 router-view  router-link

// 配置表
const routes = [
  {
    path: '/films',
    component: Films,

    // 嵌套路由
    children: [
      {
        path: '/films/Nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/Comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/Nowplaying'
      }
    ]
  },
  {
    name: 'dashiDetail', // 命名路由
    path: '/detail/:id', // 动态二级路由
    component: Detail
  },

  {
    path: '/cinemas',
    // component: Cinemas
    component: () => import('@/views/Cinemas.vue') // 懒加载
  },
  {
    path: '/city',
    component: City
  },

  {
    path: '/cinemas/Search',
    component: Search
  },

  {
    path: '/center',
    component: Center,
    meta: {
      isDashiNext: true
    }

    // // 路由独享拦截
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   if (localStorage.getItem('token')) {
    //     next()
    //   } else {
    //     next({
    //       path: '/login',
    //       query: { dashi: to.fullPath }
    //     })
    //   }
    // }

  },
  {
    path: '/order',
    component: Order,
    meta: {
      isDashiNext: true
    }
  },
  {
    path: '/login',
    component: Login
  },

  // 重定向
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

// 全局拦截(守卫)

router.beforeEach((to, from, next) => {
  console.log(to)

  // 某几个需要授权的路由
  if (to.meta.isDashiNext) {
    // 判断本地 存储中 是否 有 token
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { dashi: to.fullPath }
      })
    }
  } else {
    next()
  }
})
