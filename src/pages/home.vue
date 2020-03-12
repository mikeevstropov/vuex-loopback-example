<template>

  <!-- Home Page -->
  <div
    class="home-page">

    <page-section
      title="Customers">

      <customers-editor/>

    </page-section>

    <page-section
      class="mt-5"
      title="Books">

      <books-editor/>

    </page-section>

    <page-section
      class="mt-5"
      title="Orders">

      <orders-editor/>

    </page-section>

  </div>

</template>

<script>

  import PageSection from '../components/page/page-section';
  import BooksEditor from '../components/editors/books-editor';
  import OrdersEditor from '../components/editors/orders-editor';
  import CustomersEditor from '../components/editors/customers-editor';

  export default {
    name: 'home-page',
    components: {
      BooksEditor,
      PageSection,
      OrdersEditor,
      CustomersEditor,
    },
    props: {},
  };

</script>

<style lang="scss">

  .home-page {
    color: inherit;
  }

</style>
