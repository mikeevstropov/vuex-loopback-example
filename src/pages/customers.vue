<template>

  <!-- Customers Page -->
  <div
    class="customers-page">

    <page-header
      title="Customers"
      subtitle="Add new, edit or remove an item."/>

    <items-loader
      module="customers">

      <template
        slot-scope="{page, pages, items, loading, loadPage}">

        <page-content>

          <b-button
            to="/"
            slot="action">
            Collections
          </b-button>

          <b-button
            slot="action"
            to="/customer"
            variant="primary"
            class="float-right">
            Add new
          </b-button>

          <empty-status
            :loading="loading"
            v-if="loading || !items.length"/>

          <div
            v-else
            class="grid-8 grid-gap-4 mt-5">

            <document-card
              :data="item"
              class="h-100"
              caption="Data"
              :key="item.name"
              v-for="item in items"
              :title="item.name || 'No name'">

              <b-button
                size="sm"
                slot="action"
                to="/customer"
                variant="primary"
                class="float-right">

                <b-icon
                  scale="1.4"
                  icon="gear"/>

              </b-button>

            </document-card>

          </div>

        </page-content>

      </template>

    </items-loader>

  </div>

</template>

<script>

  export default {
    name: 'customers-page',
  };

</script>

<style lang="scss">

  .customers-page {
    color: inherit;
  }

</style>
