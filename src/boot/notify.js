import Vue from 'vue';

export default ({store, router}) => {

  Vue.prototype.$notify = function (variant, message) {

    return this.$bvToast.toast(message, {
      variant: variant,
      solid: true,
      autoHideDelay: 3000,
      noCloseButton: true,
    });
  };
}
