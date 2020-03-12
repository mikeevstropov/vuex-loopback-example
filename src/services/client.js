import axios from 'axios';
import isNull from 'lodash/isNull';
import omitBy from 'lodash/omitBy';

const client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

client.interceptors.request.use(config => {

  // To use default values defined in loopback
  // we need to avoid sending fields with null.

  if (
    config.data &&
    config.method === 'post' &&
    !(config.data instanceof FormData)
  ) config.data = omitBy(config.data, isNull);

  return config;
});

export default client;
