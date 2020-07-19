import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      isLoggedIn: false
    }
  },
  mutations: {
    setLogin(state){
      state.auth.isLoggedIn = true;
    }
  },
  actions: {
    loginAsync({ commit }) {
      // call server api to login
      commit('setLogin');
      router.push('/');
    }
  },
  modules: {
  }
})
