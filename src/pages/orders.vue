<template>

  <!-- Orders Page -->
  <div
    class="orders-page">

    <page-header
      title="Select Order"
      subtitle="Which document do you want to edit?"/>

    <items-loader
      module="orders">

      <template
        slot-scope="{page, pages, items, loading, loadPage}">

        <page-content>

          <b-button
            to="/"
            slot="action">
            Collections
          </b-button>

          <b-button
            to="/order"
            slot="action"
            variant="primary"
            class="float-right">
            Add new
          </b-button>

          <empty-status
            :loading="loading"
            v-if="loading || !items.length"/>

          <div
            v-else
            class="grid-8 grid-gap-4">

            <document-card
              :data="item"
              class="h-100"
              caption="Data"
              :key="item.id"
              v-for="item in items"
              :title="$u.humanDateTime(item.date, 'No date')">

              <b-button
                size="sm"
                slot="action"
                variant="primary"
                class="float-right"
                :to="`/order/${item.id}`">

                <b-icon
                  icon="gear"
                  scale="1.2"
                  class="align-middle"/>

              </b-button>

            </document-card>

          </div>

          <page-pagination
            :page="page"
            :pages="pages"
            @input="loadPage"/>

        </page-content>

      </template>

    </items-loader>

  </div>

</template>

<script>

  export default {
    name: 'orders-page',
  };

</script>

<style lang="scss">

  .orders-page {
    color: inherit;
  }

</style>
