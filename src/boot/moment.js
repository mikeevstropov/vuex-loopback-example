import Vue from 'vue';
import moment from 'moment';

export default function({/* store, router */}) {

  Vue.prototype.$moment = moment;
}
