<template>

  <!-- Page Footer -->
  <div
    class="page-footer d-flex justify-content-end">

    <a
      target="_blank"
      href="https://github.com/mikeevstropov/vuex-loopback">

      vuex-loopback

      <b-icon
        icon="box-arrow-up-right"/>

    </a>

  </div>

</template>

<script>

  export default {
    name: 'page-footer',
    props: {},
  };

</script>

<style lang="scss">

  .page-footer {
    margin-top: $spacer * 4;
  }

</style>
