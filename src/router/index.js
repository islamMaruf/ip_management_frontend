import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {userIsAuthenticate} from '../services/core/AuthenticateService'

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
    meta: {page_title: 'Dashboard | IP Management', auth:true},
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !userIsAuthenticate()) {
      next({ name: 'Login' });
  } else {
      if(to.name == 'Login' && userIsAuthenticate())
      {
          next({ name: 'Dashboard' });
      }
      next();
  }
});

export default router
