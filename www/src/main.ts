import Vue from 'vue'
import App from './App.vue'
import router from './router'
// BootStrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue) // Make BootstrapVue available throughout your project
Vue.use(IconsPlugin) // Optionally install the BootstrapVue icon components plugin


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
