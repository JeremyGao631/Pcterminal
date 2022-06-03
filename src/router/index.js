import Vue from 'vue'
import Router from 'vue-router'
import { deepClone } from '../utils/index.js'

Vue.use(Router)
const baseRoute = [
  {
    // home页
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      keepAlive: false, // 是否缓存组件
    }
  },
  {
    // about
    path: '/about',
    name: 'AboutCar',
    component: () => import('@/views/home/aboutCar.vue'),
    meta: {
      keepAlive: false, // 是否缓存组件
    }
  },
  {
    // contact
    path: '/contact',
    name: 'ContactView',
    component: () => import('@/views/home/contactView.vue'),
    meta: {
      keepAlive: false,
    }
  },
  {
    // showRoom
    path: '/showRoom',
    name: 'ShowRoom',
    component: () => import('@/views/home/showRoom.vue'),
    meta: {
      keepAlive:false,
    }
  },
  {
    // ell your car
    path: '/sell',
    name: 'sellCar',
    component: () => import('@/views/home/sellCar.vue'),
    meta: {
      keepAlive: false,
    }
  },
  {
    // car detail
    path: '/carDetail',
    name: 'carDetail',
    component: () => import('@/views/home/carDetail.vue'),
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '*', // 未匹配到路由时重定向
    redirect: '/home',
    meta: {
      // auth: false, // 是否需要登录
      // keepAlive: true // 是否缓存组件
    }
  }
]

const routes = deepClone([
  ...baseRoute,
])

const createRouter = () => new Router({
  routes: routes,
  scrollBehavior(to,from,saveTop){ if(saveTop){ return saveTop; }else{ return {x:0,y:0} } },
})

const router = createRouter()

export function resetRouter() {
  // const newRouter = createRouter()
  // router.matcher = newRouter.matcher
}

export default router
