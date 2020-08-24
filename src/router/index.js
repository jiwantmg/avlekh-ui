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
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('../views/Customers.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/billings',
    name: 'Billings',
    component: () => import('../views/Billings.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      requiresAuth: false
    }
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

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.requiresAuth)) {    
    if (localStorage.getItem('jwt') == null) {      
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {      
      next();
    }
  }else if(to.matched.length == 0) {
    console.log("Not found id executed");
    next({
      path: '/not-found'
    })
  }else{    
    next();
  }
})

export default router
