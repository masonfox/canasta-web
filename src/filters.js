import Vue from 'vue'

Vue.filter('formatNumber', function (value) {
    return Number(value).toLocaleString()
})