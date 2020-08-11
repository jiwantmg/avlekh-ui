import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import { tasksRouting } from './tasks';
import { staffRouting } from './staff';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard    
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('../views/Customers.vue')
  },
  {
    path: '/billings',
    name: 'Billings',
    component: () => import('../views/Billings.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...tasksRouting,
    ...staffRouting
  ]
});

export default router
