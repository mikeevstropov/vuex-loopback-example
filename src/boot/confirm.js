import Vue from 'vue';

export default function({store /* , router */}) {

  const fn = function(
    callback,
    message = 'Are you sure that you want to confirm this action?',
  ) {

    return this.$bvModal.msgBoxConfirm(message, {
      centered: true,
      okTitle: 'Continue',
      okVariant: 'primary',
      cancelTitle: 'Cancel',
      cancelVariang: 'secondary',
      footerClass: 'd-flex justify-content-between'
    }).then(value => {

      if (value && callback)
        callback();
    });
  };

  Vue.prototype.$confirm
    = store.$confirm
    = fn;
}
