import Vue from 'vue';
import moment from 'moment';

export default function({/* router, state */}) {

  Vue.prototype.$moment = moment;
}
