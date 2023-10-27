import Vue from 'vue'
import App from './App.vue'
import router from './router';

//import plugins
import AxiosPlugin from './plugins/axios';


Vue.config.productionTip = false
Vue.use(AxiosPlugin);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
