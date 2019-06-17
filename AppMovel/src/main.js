import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
// Vue.use(VueCookies);
Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
