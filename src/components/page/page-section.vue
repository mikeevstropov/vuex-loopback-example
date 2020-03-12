<template>

  <!-- Page Section -->
  <div
    class="page-section">

    <h2
      v-if="title"
      class="title">
      {{ title }}
    </h2>

    <h3
      v-if="subtitle"
      class="subtitle">
      {{ subtitle }}
    </h3>

    <div
      class="content">

      <slot/>

    </div>

  </div>

</template>

<script>

  export default {
    name: 'page-section',
    props: {
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
    },
  };

</script>

<style lang="scss">

  .page-section {
    color: inherit;
  }

</style>
