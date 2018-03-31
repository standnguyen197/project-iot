// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueHeadful from 'vue-headful';
import VueSocketio from 'vue-socket.io';
//----- VUE-TIME -----//
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
require('moment/locale/vi')

Vue.use(VueMoment, {
  moment,
})

Vue.use(VueSocketio, 'http://localhost:3000');
import VueSession from 'vue-session'
Vue.use(VueSession)

Vue.component('vue-headful', vueHeadful);

Vue.config.productionTip = false
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
