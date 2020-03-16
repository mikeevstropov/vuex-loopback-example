<template>

  <!-- Search Selector -->
  <v-select
    label="id"
    :value="value"
    @input="input"
    @search="fetch"
    :reduce="reduce"
    :options="items"
    :loading="loading"
    :disabled="disabled"
    :multiple="multiple"
    :filter-by="filterBy"
    @search:focus="fetch"
    class="search-selector"
    :placeholder="placeholder">

    <template
      slot="option"
      slot-scope="option">
      {{ getLabel(option) }}
    </template>

    <template
      slot-scope="option"
      slot="selected-option">
      {{ getLabel(option) }}
    </template>

    <span
      slot="no-options">
      not found
    </span>

  </v-select>

</template>

<script>

  import cloneDeep from 'lodash/cloneDeep';
  import EditorMixin from '@/mixins/editor-mixin';
  import SelectorMixin from '@/mixins/selector-mixin';

  export default {
    name: 'search-selector',
    mixins: [
      EditorMixin,
      SelectorMixin,
    ],
    props: {
      module: {
        type: String,
        required: true,
      },
      where: {
        type: Object,
        default: () => ({}),
      },
    },
    computed: {
      loading() {

        return this.$store
          .state[this.module]
          .loading;
      },
      items() {

        return this.$store
          .state[this.module]
          .items;
      },
    },
    methods: {
      async fetch(query = '') {

        this.$store.commit(
          `${this.module}/RESET`,
        );

        this.$store.commit(
          `${this.module}/SET_LIMIT`,
          49,
        );

        this.$store.commit(
          `${this.module}/SET_WHERE`,
          cloneDeep(this.where),
        );

        await this.$store.dispatch(
          `${this.module}/SEARCH_ITEMS`,
          {query},
        );
      },
    },
  };

</script>

<style lang="scss">

  .search-selector {
    flex: 1;
    min-width: 181px;

    .v-select .dropdown-menu {
      display:block;
    }
  }

</style>
