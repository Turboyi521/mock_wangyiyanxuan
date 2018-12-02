import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

import './mock/mockServer'
import store from './store'
Vue.use(VueLazyload, { // 内部会定义一个全局的指令: lazy
  loading
})
  new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
