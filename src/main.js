import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';



import App from './App.vue'
import router from './router';
import store from './store'
import cookieService from './services/core/CookieService'
import VeeValidateLaravel from './plugins/vee-validate-laravel';

Vue.prototype.$cookieService = cookieService
Vue.config.productionTip = false


Vue.use(VueAxios,axios)
Vue.use(VeeValidate);
Vue.use(VeeValidateLaravel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
