<template>

  <!-- Tile Card -->
  <div
    class="tile-card card shadow-sm">

    <header
      class="card-header">

      <p
        v-if="title"
        class="card-header-title">
        {{ title }}
      </p>

      <div
        v-if="$slots.headerIcon"
        class="card-header-icon">

        <span
          class="icon">

          <slot
            name="header-icon"/>

        </span>

      </div>

    </header>

    <div
      class="card-content">

      <div
        class="content">

        <slot/>

      </div>

    </div>

    <footer
      class="card-footer"
      v-if="$slots.footer">

      <slot
        name="footer"/>

    </footer>

  </div>

</template>

<script>

  export default {
    name: 'tile-card',
    props: {
      title: {
        type: String,
        default: '',
      },
      noHeader: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>

<style lang="scss">

  .tile-card {
    color: inherit;

    .card-header {
      box-shadow: none;
      border-bottom: 1px solid rgba(0, 0, 0, .07);
    }
  }

</style>
