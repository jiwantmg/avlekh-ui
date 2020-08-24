import Vue from 'vue'
import Vuex from 'vuex'
import * as userService from '@/api/user.service';
import router from '../router';
import tasks from './modules/tasks';
import dashboard from './modules/dashboard';
import absent from './modules/absent';
import customers from './modules/customers';
import staffs from './modules/staffs';

Vue.use(Vuex)

const appInitialAuthState = () => {
  let user = JSON.parse(localStorage.getItem('user')) ?? null;
  let isLoggedIn = user ? true : false;
  
  return {
    isLoggedIn: isLoggedIn,
    user: user,    
  }
}

export default new Vuex.Store({
  state: {
    auth: appInitialAuthState(),
    title: 'AvlekhUI',
    theme: 'light',
    isDrawerOpen: true
  },
  mutations: {
    // vuex
    setLogin(state, user){
      state.auth.user = user;
      state.auth.isLoggedIn = true;
    }
  },
  actions: {
    loginAsync({ commit }, user) {         
      userService.loginUser(user).then(
        res => {          
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('user', JSON.stringify({user: 'jiwan'}))
          commit('setLogin', user);
          router.push('/');
        },
        error => {
          console.error(error);
        }
      );
    },
    logout({ commit }) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');     
    }
  },
  modules: {
    tasks,
    dashboard,
    absent,
    customers,
    staffs
  }
})