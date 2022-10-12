import { createRouter, createWebHashHistory } from 'vue-router'
import Wait from '../views/OWait.vue'
import Test from '../views/OTest.vue'
import Login from '../views/login/OLogin.vue'
import LunBoView from '../views/LunBoView.vue'
// import Home from '../views/home/OHome.vue'
// import { hasOwnMetadata } from 'core-js/fn/reflect'
const routes = [
  {
    path: '/',
    name: 'wait',
    // component: () => import('../views/home/OHome.vue')
    component:Wait
  },
  {
    path: '/login',
    name:'login',
    component:Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/OHome.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/home/ONav.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/lunbo',
    name: 'lunbo',
    component: LunBoView
  },
  {
    name: 'manage',
    path: '/manage',
    // redirect: 'welcome1',
    meta: { title: '首页' },
   component: () => import('@/views/manage/OIndex.vue'),
   children:[
    {
      name:'user',
      path:'user',
      component: () => import('@/views/manage/oUser.vue'),
    },
    {
      name:'commodity',
      path:'commodity',
      component: () =>import('@/views/manage/OCommodity.vue')
    },
    {
      name:'indent',
      path:'indent',
      component: () =>import('@/views/manage/OIndent.vue')
    }
   ]

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
