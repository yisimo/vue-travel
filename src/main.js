// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
// 引入border.css解决不同移动端屏幕1像素显示的问题
import './assets/styles/border.css'

Vue.config.productionTip = false
// 引入fastClick解决部分移动端click事件延迟300毫秒执行的问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
