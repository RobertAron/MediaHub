import Vue from 'vue'
import App from './App.vue'
import router from './router'
// BootStrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue) // Make BootstrapVue available throughout your project
Vue.use(IconsPlugin) // Optionally install the BootstrapVue icon components plugin
import './app.scss'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
