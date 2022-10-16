import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildrenView from '../views/ChildrenView.vue'
import TeleportTest from '@/views/TeleportTest'
import CompositionTest from '@/views/CompositionTest'
import PropsEmitTest from '@/views/PropsEmitTest'
import FunctionTest from '@/views/FunctionTest'
import RouterTest from '@/views/RouterTest'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/children',
    name: 'Children',
    component: ChildrenView
  },
  {
    path: '/teleport-test',
    name: 'TeleportTest',
    component: TeleportTest
  },
  {
    path: '/composition-test',
    name: 'CompositionTest',
    component: CompositionTest
  },
  {
    path: '/props-emit-test',
    name: 'PropsEmitTest',
    component: PropsEmitTest
  },
  {
    path: '/function-test',
    name: 'FunctionTest',
    component: FunctionTest
  },
  {
    path: '/router-test',
    name: 'RouterTest',
    component: RouterTest
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
