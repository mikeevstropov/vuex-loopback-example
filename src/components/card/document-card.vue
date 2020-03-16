<template>

  <!-- Document Card -->
  <b-card
    class="document-card">

    <b-card-title
      v-if="title || $slots.action">

      <span
        class="align-middle">
        {{ title }}
      </span>

      <div
        class="float-right">

        <slot
          name="action"/>

      </div>

    </b-card-title>

    <small
      v-if="caption"
      class="d-block text-muted mb-2">
      {{ caption }}
    </small>

    <json-block
      :data="data"/>

  </b-card>

</template>

<script>

  export default {
    name: 'document-card',
    props: [
      'title',
      'caption',
      'data',
    ],
  };

</script>

<style lang="scss">

  .document-card {
    color: inherit;
  }

</style>
