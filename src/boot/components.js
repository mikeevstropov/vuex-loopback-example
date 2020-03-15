import Vue from 'vue';
import {ItemEditor} from 'vuex-loopback';
import {ItemsLoader} from 'vuex-loopback';
import EmptyStatus from '@/components/common/empty-status';

export default function({/* router, state */}) {

  Vue.component(ItemEditor.name, ItemEditor);
  Vue.component(ItemsLoader.name, ItemsLoader);
  Vue.component(EmptyStatus.name, EmptyStatus);
}
