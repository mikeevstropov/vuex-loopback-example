<template>

  <!-- Book Page -->
  <div
    class="book-page">

    <page-header
      title="Book"
      subtitle="You are able to edit or remove an item."/>

    <item-editor
      module="books"
      @removed="$router.replace('/books')"
      @saved="$routerReplace({name: $route.name, params: {id: $event.id}})">

      <template
        v-if="item"
        slot-scope="{item, set, save, remove, loading}">

        <page-content>

          <b-button
            slot="action"
            to="/books">
            Books
          </b-button>

          <b-button
            class="mr-2"
            v-if="item.id"
            variant="danger"
            slot="right-action"
            @click="$confirm(remove)">
            Remove
          </b-button>

          <b-button
            @click="save"
            variant="success"
            slot="right-action">
            Save
          </b-button>

          <div
            class="grid-8 grid-gap-4">

            <document-card
              :data="item"
              class="h-100"/>

            <b-card>

              <b-form-group
                label="Name">

                <b-form-input
                  :value="item.name"
                  placeholder="enter name"
                  @input="set({...item, name: $event})"/>

              </b-form-group>

            </b-card>

          </div>

        </page-content>

      </template>

    </item-editor>

  </div>

</template>

<script>

  export default {
    name: 'book-page',
    async created() {

      const {id} = this
        .$route
        .params;

      if (id) {

        await this.$store.dispatch(
          'books/FETCH_ITEM',
          {id},
        );

      } else {

        await this.$store.dispatch(
          'books/CREATE_TEMP_ITEM'
        );
      }

      const {tempItem} = this
        .$store
        .state
        .books;

      if (!tempItem)
        this.$router
          .replace('/error/404');
    }
  };

</script>

<style lang="scss">

  .book-page {
    color: inherit;
  }

</style>
