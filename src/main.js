import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import router from './router/index'

import 'element-ui/lib/theme-chalk/index.css'
import '@/style/style.scss'

Vue.use(router);
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
