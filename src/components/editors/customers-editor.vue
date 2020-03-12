<template>

  <!-- Customers Editor -->
  <div
    class="customers-editor">

    <items-loader
      ref="loader"
      module="customers">

      <template
        slot-scope="{page, pages, items, loading, loadPage}">

        <b-loading
          is-full-page
          :active="loading"/>

        <empty-status
          v-if="!items.length"/>

        <div
          class="grid-4 grid-gap-4">

          <tile-card
            :key="item.id"
            :title="item.name"
            v-for="item in items"/>

        </div>

      </template>

    </items-loader>

  </div>

</template>

<script>

  export default {
    name: 'customers-editor',
    props: {},
  };

</script>

<style lang="scss">

  .customers-editor {
    color: inherit;
  }

</style>
