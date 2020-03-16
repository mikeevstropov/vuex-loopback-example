import '@/assets/scss/grid.scss';
import '@/assets/scss/overrides.scss';

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
