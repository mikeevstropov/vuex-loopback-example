import Vue from 'vue';
import * as utils from '@/utils';

export default ({store /* , router */}) => {

  Vue.prototype.$u
    = store.$u
    = utils;
}
