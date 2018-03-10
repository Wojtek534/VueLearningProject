// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import status from './components/status/ServerStatus.vue'
import './setWindow'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

export const eventStore = new Vue()
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.http.options.root = 'https://vue-http-c1b43.firebaseio.com/'

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    /* el.style.backgroundColor = 'green' */
    el.style.backgroundColor = binding.value
  }
})
Vue.filter('toLowercase', (value) => {
  return value.toLowerCase()
})
/* Global component register */
Vue.component('app-status', status)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: x => x(App)
})
