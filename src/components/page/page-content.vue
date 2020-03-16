<template>

  <!-- Page Content -->
  <div
    class="page-content mt-5">

    <div
      class="mb-4"
      v-if="$slots.action">

      <slot
        name="action"/>

    </div>

    <div
      :class="contentClass">

      <slot/>

    </div>

  </div>

</template>

<script>

  export default {
    name: 'page-content',
    props: [
      'contentClass'
    ],
  };

</script>

<style lang="scss">

  .page-content {
    color: inherit;
  }

</style>
