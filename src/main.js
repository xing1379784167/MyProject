import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Tabs,TabPane,Row,Card,Col} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// Vue.config.productionSourceMap = false


Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
