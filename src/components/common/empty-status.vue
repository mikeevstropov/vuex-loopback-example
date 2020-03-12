<template>

  <!-- Empty Status -->
  <div
    class="empty-status">

    <b-loading
      :active="loading"/>

    <span
      v-if="!loading"
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
        default: 'тут ничего',
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
    color: dimgrey;
    font-size: 1.26rem;
    text-align: center;
  }

</style>
