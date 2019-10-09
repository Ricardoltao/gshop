/**
 * 入口JS
 */

import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './routers'
import store from './store'

import './mocks/mockServer'

// 注册全局组件
Vue.component(Button.name, Button)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
