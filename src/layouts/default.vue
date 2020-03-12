<template>

  <!-- Default Layout -->
  <section
    class="default-layout">

    <the-navbar
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

    <the-footer/>

  </section>

</template>

<script>

  import TheNavbar from '../components/page/the-navbar';
  import TheFooter from '../components/page/the-footer';

  export default {
    name: 'default-layout',
    components: {
      TheFooter,
      TheNavbar,
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
