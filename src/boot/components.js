import Vue from 'vue';
import {ItemEditor} from 'vuex-loopback';
import {ItemsLoader} from 'vuex-loopback';
import VueJsonPretty from 'vue-json-pretty';
import PageHeader from '@/components/page/page-header';
import PageContent from '@/components/page/page-content';
import EmptyStatus from '@/components/common/empty-status';
import DocumentCard from '@/components/card/document-card';

export default function({/* router, state */}) {

  Vue.component('json-block', VueJsonPretty);
  Vue.component(ItemEditor.name, ItemEditor);
  Vue.component(PageHeader.name, PageHeader);
  Vue.component(PageContent.name, PageContent);
  Vue.component(ItemsLoader.name, ItemsLoader);
  Vue.component(EmptyStatus.name, EmptyStatus);
  Vue.component(DocumentCard.name, DocumentCard);
}
