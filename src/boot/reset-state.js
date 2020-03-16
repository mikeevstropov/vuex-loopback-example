
export default ({store, router}) => {

  // Reset state.

  router.beforeEach((to, from, next) => {

    if (
      from &&
      from.name &&
      from.name !== to.name
    ) {
      store.commit('customers/RESET');
      store.commit('books/RESET');
      store.commit('orders/RESET');
    }

    next();
  });
};
