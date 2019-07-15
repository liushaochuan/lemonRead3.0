// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
// import store from './vuex/store'
import tool from './util/tool'
import 'babel-polyfill'
// import MetaInfo from 'vue-meta-info'

// import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(tool);
Vue.use(ElementUI);
// Vue.use(VueLazyload)
// Vue.use(MetaInfo)

new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
