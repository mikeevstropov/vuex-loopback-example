import Vue from 'vue';

export default ({store, router}) => {

  store.$router = router;

  Vue.prototype.$routerReplace = function() {

    return this.$router.replace(
      ...arguments,
    ).catch(error => {

      if (error.name !== 'NavigationDuplicated')
        throw error;
    });
  };
}
