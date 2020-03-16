import Vue from 'vue';
import VueSelect from 'vue-select';
import '@/assets/scss/vue-select.scss';

export default function({/* store, router */}) {

  Vue.component('v-select', VueSelect);
}
