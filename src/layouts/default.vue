<template>

  <div
    class="default-layout container">

    <div
      class="default-layout__content">

      <router-view/>

    </div>

    <page-footer/>

  </div>

</template>

<script>

  export default {
    name: 'default-layout',
    props: {},
  };

</script>

<style lang="scss">

  .default-layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    padding: map-get($spacers, 5);
    padding-bottom: $spacer * 5;

    &__content {
      flex: 1;
    }
  }

</style>
