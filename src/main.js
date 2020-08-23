import Vue from 'vue'
import store from './store'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import './scss/styles.scss'

Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
