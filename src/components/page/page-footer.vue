<template>

  <!-- Page Footer -->
  <footer
    class="page-footer footer">

    <div
      class="container">

      <div
        class="content">

        <div
          class="columns">

          <div
            class="column">

            <p>

              <small>

                Usage example of

                <a
                  target="_blank"
                  href="https://github.com/mikeevstropov/vuex-loopback">
                  vuex-loopback
                </a>

              </small>

            </p>

            <b-field>

              <p
                class="control">

                <a
                  target="_blank"
                  class="button pl-3"
                  href="https://github.com/mikeevstropov/vuex-loopback">

                  <b-icon
                    class="mr-1"
                    icon="github"/>

                  <span>
                    GitHub
                  </span>

                </a>

              </p>

            </b-field>

          </div>

          <div
            class="column">

            <router-link
              exact
              to="/"
              class="navbar-item has-text-weight-semibold">
              Collections
            </router-link>

            <router-link
              to="/customers"
              class="navbar-item has-text-weight-semibold">
              Customers
            </router-link>

            <router-link
              to="/books"
              class="navbar-item has-text-weight-semibold">
              Books
            </router-link>

            <router-link
              to="/orders"
              class="navbar-item has-text-weight-semibold">
              Orders
            </router-link>

          </div>

        </div>

      </div>

    </div>

  </footer>

</template>

<script>

  export default {
    name: 'page-footer',
    props: {},
  };

</script>

<style lang="scss">

  .page-footer {
    color: inherit;
  }

</style>
