import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import Echarts from 'echarts'
import vueEcharts from 'vue-echarts'

import './styles/index.scss'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

Vue.component('v-chart', vueEcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
