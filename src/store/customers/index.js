import createState from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

import {createModule} from 'vuex-loopback';
import model from '@/models/customer';

export default function ({client, onError, onSuccess}) {

  return {
    namespaced: true,
    ...createModule({
      model,
      client,
      onError,
      onSuccess,
      collection: 'customers',
      getters,
      actions,
      mutations,
      state: createState(),
    }),
  };
}
