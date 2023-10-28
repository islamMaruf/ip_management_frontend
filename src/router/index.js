import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { userIsAuthenticate } from '../services/core/AuthenticateService'

import LoginPage from "../views/LoginPage.vue"
import DashboardPage from "../views/DashboardPage.vue"
import IPPage from "../views/IP/IPPage.vue"
import IPCreatePage from "../views/IP/IPCreatePage.vue"
import IPEditPage from "../views/IP/IPEditPage.vue"
import ActivityLoggerPage from "../views/ActivityLogger.vue"



const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    alias: '/login',
    meta: { page_title: 'Login | IP Management' },
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    meta: { page_title: 'Dashboard | IP Management', auth: true },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: IPPage,
        meta: { page_title: 'Dashboard | IP Solution', auth: true },
      },
      {
        path: '/ip/create',
        name: 'CreateIP',
        component: IPCreatePage,
        meta: { page_title: 'Dashboard | IP Solution', auth: true },
      },
      {
        path: '/ip/edit/:id',
        name: 'EditIP',
        component: IPEditPage,
        meta: { page_title: 'Dashboard | IP Solution', auth: true },
      },
      {
        path: '/activity-logger',
        name: 'activityLogger',
        component: ActivityLoggerPage,
        meta: { page_title: 'Dashboard | IP Solution', auth: true },
      },
    ]
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
    if (to.name == 'Login' && userIsAuthenticate()) {
      next({ name: 'Dashboard' });
    }
    next();
  }
});

export default router
