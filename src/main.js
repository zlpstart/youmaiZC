import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Dialog } from 'vant';
import Vant from 'vant';

import 'lib-flexible'
import 'vant/lib/index.css';

import '../src/styles/reset.css'
import '../src/styles/layout.css'

Vue.use(Vant);

Vue.config.productionTip = false

Vue.use(Dialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
