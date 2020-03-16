<template>

  <!-- Page Content -->
  <div
    class="page-content mt-5">

    <div
      class="d-flex mb-4"
      v-if="$slots.action">

      <div
        class="flex-fill">

        <slot
          name="action"/>

      </div>

      <div
        class="d-flex">

        <slot
          name="right-action"/>

      </div>

    </div>

    <div
      :class="contentClass"
      class="page-content__content">

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

    &__content {
      margin-top: $spacer * 2.1;
    }
  }

</style>
