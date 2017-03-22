import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import AlloyFingerVue from './assets/alloy_finger.vue.js'
import VueLazyload from 'vue-lazyload'
import store from './store/index.js'
import VueResource from 'vue-resource'
import Loading from './components/loading'
import 'babel-polyfill'
Vue.use(VueResource)
Vue.use(AlloyFingerVue)
Vue.use(vueRouter)
Vue.use(Loading)
Vue.use(VueLazyload, {
  preLoad: 1.3,
 // error: 'dist/error.png',
  loading: './assets/images/loading-spin.svg',
  attempt: 1
})
Vue.prototype.$httpx = axios //把axios挂到Vue原型上
axios.interceptors.request.use(function(config){
  store.dispatch("showLoading");
  return config;
},function(error){
  return Promise.reject(error)
})
axios.interceptors.response.use(function(response){
    store.dispatch("hideLoading");
     //对响应数据做些事
     return response;
   },function(error){
     //请求错误时做些事
     return Promise.reject(error);
   })
const router = new vueRouter({
 // mode:"history",
  scrollBehavior:()=>({y:0}),
  routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
