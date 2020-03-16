<template>

  <!-- Order Page -->
  <div
    class="order-page">

    <page-header
      title="Order"
      subtitle="You are able to edit or remove an item."/>

    <item-editor
      module="orders"
      @removed="$router.replace('/orders')"
      @saved="$routerReplace({name: $route.name, params: {id: $event.id}})">

      <template
        v-if="item"
        slot-scope="{item, set, save, remove, loading}">

        <page-content>

          <b-button
            slot="action"
            to="/orders">
            Orders
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
                label="Date">

                <date-picker
                  :value="item.date"
                  @input="set({...item, date: $event})"/>

              </b-form-group>

              <b-form-group
                label="Time">

                <time-picker
                  :value="item.date"
                  @input="set({...item, date: $event})"/>

              </b-form-group>

              <b-form-group
                label="Customer">

                <search-selector
                  label="name"
                  module="customers"
                  :value="item.customer"
                  @input="$u.selectorInput(set, $event, item, 'customer')"/>

              </b-form-group>

              <b-form-group
                label="Description">

                <b-form-textarea
                  rows="3"
                  max-rows="6"
                  :value="item.description"
                  placeholder="enter something"
                  @input="set({...item, description: $event})"/>

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
    name: 'order-page',
    async created() {

      const {id} = this
        .$route
        .params;

      if (id) {

        await this.$store.dispatch(
          'orders/FETCH_ITEM',
          {id},
        );

      } else {

        await this.$store.dispatch(
          'orders/CREATE_TEMP_ITEM'
        );
      }

      const {tempItem} = this
        .$store
        .state
        .orders;

      if (!tempItem)
        this.$router
          .replace('/error/404');
    }
  };

</script>

<style lang="scss">

  .order-page {
    color: inherit;
  }

</style>
