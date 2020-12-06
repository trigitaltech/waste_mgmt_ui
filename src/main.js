import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import * as VueGoogleMaps from 'vue2-google-maps'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import Antd from 'ant-design-vue'
import VueMask from 'v-mask'
import vco from 'v-click-outside'
import VueRouter from 'vue-router'
import VueFeather from 'vue-feather'
import flatPickr from 'vue-flatpickr-component'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import 'vue-search-select/dist/VueSearchSelect.css'
import Notifications from 'vue-notification'
// import '../vee-validate.js'
import VueSweetalert2 from 'vue-sweetalert2';
import Toasted from 'vue-toasted';
import { Datetime } from 'vue-datetime';
 
import 'vue-datetime/dist/vue-datetime.css'
import 'ant-design-vue/dist/antd.css'
import VueTreeList from 'vue-tree-list'

Vue.use(Antd)
Vue.use(VueTreeList)
Vue.use(Datetime)
Vue.use(Notifications)
Vue.use(VueFeather)
Vue.use(flatPickr)
Vue.use(VueSweetalert2);
Vue.use(VueRouter)
Vue.use(vco)
Vue.use(Toasted)
Vue.use(VueGoogleMaps, {
  // AIzaSyDKS80QRLObhMDL9XblnGyblRgjAp8sasE
  load: {
    key: 'AIzaSyAMRA7ZCZ9hUFFrd6jX2fDfNfIdcY5wMKw',
    libraries: 'places',
  },
})
// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)

Vue.component('apexchart', VueApexCharts)

// Uncomment this if you are having api served through other url or do not want to use fake backend
// Vue.prototype.$http = require('axios')
// Vue.prototype.$http.defaults.baseURL  = 'http://mock-api.coderthemes.com/'

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
