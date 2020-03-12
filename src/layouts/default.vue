<template>

  <!-- Default Layout -->
  <div
    class="default-layout">

    <router-view/>

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
    color: inherit;
  }

</style>
