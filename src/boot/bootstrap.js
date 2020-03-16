import Vue from 'vue';
import '@/assets/scss/bootstrap.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

export default function({/* router, state */}) {

  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
}
