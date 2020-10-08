import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import {tasksRouting} from './tasks';
import {staffRouting} from './staff';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    },
    {
        path: '/customers',
        name: 'Customers',
        component: () => import('../views/Customers.vue'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }

    },
    {
        path: '/billings',
        name: 'Billings',
        component: () => import('../views/Billings.vue'),
        meta: {
            roles: ["admin", "staff"],
            isPublic: false
        }
    },
    {
        path: '/denied',
        name: 'AccessDenied',
        component: () => import('../views/AccessDenied.vue'),
        meta: {
            roles: [],
            isPublic: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
        meta: {
            roles: [],
            isPublic: true
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
    if (!to.meta.isPublic) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            if (!to.meta.roles.includes(user.role)) {
              return next({ path: '/denied'})
            }
        }else{
          console.log("Redirecting to login");
          return next('/login');
        }
    }
    next();

});

export default router
