import Vue from 'vue'
import store from './store'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './scss/styles.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  created () {
    this.$store.commit('newRound', 1)
  }
}).$mount('#app')
