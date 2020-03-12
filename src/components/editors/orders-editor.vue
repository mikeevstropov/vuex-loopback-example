<template>

  <!-- Orders Editor -->
  <div
    class="orders-editor">

    <items-loader
      ref="loader"
      module="orders">

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
            v-for="item in items"
            :title="$moment(item.date).format('LL')"/>

        </div>

      </template>

    </items-loader>

  </div>

</template>

<script>

  export default {
    name: 'orders-editor',
    props: {},
  };

</script>

<style lang="scss">

  .orders-editor {
    color: inherit;
  }

</style>
