<template>

  <!-- Books Page -->
  <div
    class="books-page">

    <page-header
      title="Select Book"
      subtitle="Which document do you want to edit?"/>

    <items-loader
      module="books">

      <template
        slot-scope="{page, pages, items, loading, loadPage}">

        <page-content>

          <b-button
            to="/"
            slot="action">
            Collections
          </b-button>

          <b-button
            to="/book"
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
              :title="item.name || 'No name'">

              <b-button
                size="sm"
                slot="action"
                variant="primary"
                class="float-right"
                :to="`/book/${item.id}`">

                <b-icon
                  scale="1.4"
                  icon="gear"/>

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
    name: 'books-page',
  };

</script>

<style lang="scss">

  .books-page {
    color: inherit;
  }

</style>
