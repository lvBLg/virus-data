import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Col, Row, Button, Icon, Popup, Cell, Tab, Tabs, Swipe, SwipeItem } from 'vant'
import './libs/rem.js'
import axios from './http/http.js'
import './icons'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'

Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)

Vue.use(HighchartsVue)
stockInit(Highcharts)
mapInit(Highcharts)

Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
