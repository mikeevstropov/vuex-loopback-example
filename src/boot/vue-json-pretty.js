import Vue from 'vue';
import '@/assets/scss/vue-json-pretty.scss';
import VueJsonPretty from 'vue-json-pretty';

export default function({/* store, router */}) {

  Vue.component('json-block', VueJsonPretty);
}
