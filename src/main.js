import Vue from 'vue'
import store from './store'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './scss/styles.scss'
import Storage from '@/storage'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  created () {
    if (Storage.has('state')) {
      this.$store.commit('resetFromStorage')
    } else {
      this.$store.commit('newRound')
    }
  }
}).$mount('#app')
