import Vue from 'vue'
import App from './App.vue'
import 'babel-polyfill'
import router from './router'
import './plugins/element.js'
import Router from 'vue-router'
import "@/assets/css/test.css"
import 'lib-flexible'
import  "amfe-flexible";

// 提交测试
Vue.config.productionTip = false


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

