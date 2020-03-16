<template>

  <!-- Customer Page -->
  <div
    class="customer-page">

    <page-header
      title="Customer"
      subtitle="You are able to edit or remove an item."/>

    <item-editor
      module="customers"
      @removed="$router.replace('/customers')"
      @saved="$routerReplace({name: $route.name, params: {id: $event.id}})">

      <template
        v-if="item"
        slot-scope="{item, set, save, remove, loading}">

        <page-content>

          <b-button
            slot="action"
            to="/customers">
            Customers
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

              <b-form-group
                label="Age">

                <b-form-input
                  type="number"
                  :value="item.age"
                  placeholder="enter age"
                  @input="set({...item, age: parseInt($event, 10) || 0})"/>

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
    name: 'customer-page',
    async created() {

      const {id} = this
        .$route
        .params;

      if (id) {

        await this.$store.dispatch(
          'customers/FETCH_ITEM',
          {id},
        );

      } else {

        await this.$store.dispatch(
          'customers/CREATE_TEMP_ITEM'
        );
      }

      const {tempItem} = this
        .$store
        .state
        .customers;

      if (!tempItem)
        this.$router
          .replace('/error/404');
    }
  };

</script>

<style lang="scss">

  .customer-page {
    color: inherit;
  }

</style>
