<template>

  <!-- Default Layout -->
  <section
    class="default-layout">

    <page-navbar
      light/>

    <!-- Content -->
    <section
      class="default-layout__content hero is-light">

      <div
        class="hero-body">

        <div
          class="container">

          <router-view/>

        </div>

      </div>

    </section>

    <page-footer/>

  </section>

</template>

<script>

  import PageNavbar from '../components/page/page-navbar';
  import PageFooter from '../components/page/page-footer';

  export default {
    name: 'default-layout',
    components: {
      PageFooter,
      PageNavbar,
    },
    props: {},
  };

</script>

<style lang="scss">

  .default-layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    &__content {
      flex: 1;
    }
  }

</style>
