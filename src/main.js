// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css'
import Vue from 'vue'
import App from './App'
import "@/style/index.scss"
import router from './router'
import Element from 'element-ui'
import store from "./store"
import './mock'
import './permission'
import './icons'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './filters' // global filters


Vue.use(Element)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
