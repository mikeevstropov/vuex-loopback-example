<template>

  <div
    class="default-layout container">

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
    padding: map-get($spacers, 5);
    padding-bottom: $spacer * 5;
  }

</style>
