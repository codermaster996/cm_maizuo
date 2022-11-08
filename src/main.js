import Vue from 'vue' // Es6导入方式
import App from './App.vue' // 导入根组件App
// import App from './PcApp.vue' // 导入根组件App
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router, // this.$router === router
  store, // this.$store === store
  render: h => h(App) // vue支持的新写法
}).$mount('#app')

// var obj = {
//   name: 'dashi',
//   age: 100
// }
// console.log(obj)
