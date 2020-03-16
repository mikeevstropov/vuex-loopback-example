import Vue from 'vue';
import '@/assets/scss/bootstrap.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';

export default function({/* store, router */}) {

  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
}
