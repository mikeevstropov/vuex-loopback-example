import Vue from 'vue';
import Vuex from 'vuex';
import app from '../main';
import {client} from '@/services';

import createBooksModule from './books';
import createOrdersModule from './orders';
import createCustomersModule from './customers';

Vue.use(Vuex);

const onSuccess = ({action}) => {

  if (
    action === 'FETCH_ITEM' ||
    action === 'FETCH_ITEMS'
  ) return;

  app.$notify(
    'success',
    'Success',
  );
};

const onError = ({error}) => app.$notify(
  'error',
  error.message || 'Failed',
);

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
