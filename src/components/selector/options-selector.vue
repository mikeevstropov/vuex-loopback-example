<template>

  <!-- Options Selector -->
  <v-select
    label="id"
    :value="value"
    @input="input"
    :reduce="reduce"
    :options="items"
    :multiple="multiple"
    :disabled="disabled"
    :filter-by="filterBy"
    class="options-selector"
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

  import EditorMixin from '@/mixins/editor-mixin';
  import SelectorMixin from '@/mixins/selector-mixin';

  export default {
    name: 'options-selector',
    mixins: [
      EditorMixin,
      SelectorMixin,
    ],
    computed: {
      items() {

        return this.options.map((value, index) => ({
          ...value,
          id: value.id || index,
        }));
      }
    }
  };

</script>

<style lang="scss">

  .options-selector {
    flex: 1;
    min-width: 181px;
  }

</style>
