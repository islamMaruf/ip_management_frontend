import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LoginPage from "../views/LoginPage.vue"
import DashboardPage from "../views/DashboardPage.vue"


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    alias: '/login',
    meta: {page_title: 'Login | IP Management'},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {page_title: 'Dashboard | IP Management'},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
