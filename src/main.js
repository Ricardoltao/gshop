/**
 * 入口JS
 */

import Vue from 'vue'
import App from './App'
import router from './routers'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
