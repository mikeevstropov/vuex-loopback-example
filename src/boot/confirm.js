import Vue from 'vue';

export default function({/* router, state */}) {

  const fn = function(
    callback,
    message = 'Подтвердите действие',
  ) {

    return this.$bvModal.msgBoxConfirm(message, {
      centered: true,
      okTitle: 'Продолжить',
      okVariant: 'primary',
      cancelTitle: 'Отмена',
      cancelVariang: 'secondary',
      contentClass: 'font-size-5',
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
