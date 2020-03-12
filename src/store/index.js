import Vue from 'vue';
import Vuex from 'vuex';
import client from '@/services';
import {NotificationProgrammatic as Notify} from 'buefy';

import createBooksModule from './books';
import createOrdersModule from './orders';
import createCustomersModule from './customers';

Vue.use(Vuex);

const onSuccess = ({action}) => {

  if (
    action === 'FETCH_ITEM' ||
    action === 'FETCH_ITEMS'
  ) return;

  Notify.open({
    duration: 3000,
    type: 'is-success',
    position: 'is-top-right',
    message: 'Operation succeeded.',
  });
};

const onError = ({error}) => Notify.open({
  duration: 3000,
  type: 'is-danger',
  position: 'is-top-right',
  message: error.message || 'Operation failed.',
});

const options = {
  client,
  onError,
  onSuccess,
};

export default new Vuex.Store({
  modules: {
    books: createBooksModule(options),
    orders: createOrdersModule(options),
    customers: createCustomersModule(options),
  },
})
