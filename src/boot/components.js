import Vue from 'vue';
import {ItemEditor} from 'vuex-loopback';
import {ItemsLoader} from 'vuex-loopback';
import DatePicker from '@/components/date/date-picker';
import TimePicker from '@/components/date/time-picker';
import PageHeader from '@/components/page/page-header';
import PageContent from '@/components/page/page-content';
import EmptyStatus from '@/components/common/empty-status';
import DocumentCard from '@/components/card/document-card';
import PagePagination from '@/components/page/page-pagination';
import SearchSelector from '@/components/selector/search-selector';
import OptionsSelector from '@/components/selector/options-selector';

export default function({/* store, router */}) {

  Vue.component(ItemEditor.name, ItemEditor);
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(TimePicker.name, TimePicker);
  Vue.component(PageHeader.name, PageHeader);
  Vue.component(PageContent.name, PageContent);
  Vue.component(ItemsLoader.name, ItemsLoader);
  Vue.component(EmptyStatus.name, EmptyStatus);
  Vue.component(DocumentCard.name, DocumentCard);
  Vue.component(SearchSelector.name, SearchSelector);
  Vue.component(PagePagination.name, PagePagination);
  Vue.component(OptionsSelector.name, OptionsSelector);
}
