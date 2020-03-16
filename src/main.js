import '@/assets/scss/grid.scss';

import Vue from 'vue';
import boot from './boot';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

boot.forEach(item => item({
  store,
  router,
}));

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
