<template>

  <!-- Page Pagination -->
  <b-pagination-nav
    :value="page"
    align="center"
    v-if="pages > 1"
    :number-of-pages="pages"
    class="page-pagination mt-5"
    :link-gen="v => `#page-${v}`"
    @input="$emit('input', $event)">

    <template
      slot="next-text">
      ›
    </template>

    <template
      slot="prev-text">
      ‹
    </template>

    <template
      slot="first-text">
      «
    </template>

    <template
      slot="last-text">
      »
    </template>

  </b-pagination-nav>

</template>

<script>

  export default {
    name: 'page-pagination',
    props: {
      page: {
        type: Number,
        required: true,
      },
      pages: {
        type: Number,
        required: true,
      },
    },
  };

</script>

<style lang="scss">

  .page-pagination {

    .page-item {
      padding: 10px;

      &.disabled {
        opacity: .3;
      }

      .page-link {
        border: none;
        border-radius: $border-radius-lg;
      }
    }
  }

</style>
