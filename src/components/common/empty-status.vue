<template>

  <!-- Empty Status -->
  <div
    class="empty-status">

    <b-spinner
      v-if="loading"
      variant="primary"/>

    <span
      v-else
      style="opacity: .7;">
      {{ message }}
    </span>

  </div>

</template>

<script>

  export default {
    name: 'empty-status',
    props: {
      message: {
        type: String,
        default: 'nothing here',
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>

<style lang="scss">

  .empty-status {
    margin: 4.5rem;
    color: $text-muted;
    font-size: 1.26rem;
    text-align: center;
    padding: map-get($spacers, 5);
  }

</style>
