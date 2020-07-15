import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initAppCore } from './core/app';

Vue.config.productionTip = false
initAppCore();

// create new app v1.0.0
// this is another project v2.0.0
// this is a testing 
// this is a final deployement testing
new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
