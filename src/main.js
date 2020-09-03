import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Col, Row, Button, Icon, Popup, Cell, Grid, GridItem } from 'vant'
import './libs/rem.js'
import axios from './http/http.js'
import './icons'

Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(Grid)
Vue.use(GridItem)

Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
