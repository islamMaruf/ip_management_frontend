import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LoginPage from "../views/LoginPage.vue"


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    alias: '/login',
    meta: {page_title: 'Login | IP Solution'},
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
