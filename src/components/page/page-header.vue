<template>

  <!-- Page Header -->
  <div
    v-if="title"
    class="page-header">

    <h1>
      {{ title }}
    </h1>

    <p
      class="lead"
      v-if="subtitle">
      {{ subtitle }}
    </p>

  </div>

</template>

<script>

  export default {
    name: 'page-header',
    props: [
      'title',
      'subtitle',
    ],
  };

</script>

<style lang="scss">

  .page-header {
    color: inherit;
  }

</style>
