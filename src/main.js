import Vue from 'vue'
import App from './App.vue'
import TreeView from './TreeView.vue'

window._ = require('underscore')

Vue.component('tree-view', TreeView)

new Vue({
  el: '#app',
  render: h => h(App)
})
