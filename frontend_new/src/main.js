import Vue from 'vue'
import App from './App.vue'
import vMainWrapper from './components/v-main-wrapper'
import vBtn from './components/v-btn'
import router from './router'
import store from './store'
import axios from "axios"

Vue.component('vMainWrapper', vMainWrapper)
Vue.component('vBtn', vBtn)
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1/api'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
