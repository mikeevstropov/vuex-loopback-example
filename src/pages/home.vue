<template>

  <!-- Home Page -->
  <div
    class="home-page">

    <page-header
      title="Select Collection"
      subtitle="Which collection do you want to manage?"/>

    <page-content
      content-class="grid-6 grid-gap-4">

      <document-card
        caption="Model"
        :key="item.name"
        :data="item.model"
        :title="item.title"
        v-for="item in collections">

        <b-button
          size="sm"
          slot="action"
          :to="item.link"
          variant="primary">

          <b-icon
            icon="gear"
            scale="1.2"
            class="align-middle"/>

        </b-button>

      </document-card>

    </page-content>

  </div>

</template>

<script>

  import collections from '@/constants/collections';

  export default {
    name: 'home-page',
    created() {

      this.collections = collections.map(item => ({
        ...item,
        model: require(`@/models/${item.name}`),
      }));
    },
  };

</script>

<style lang="scss">

  .home-page {
    color: inherit;
  }

</style>
