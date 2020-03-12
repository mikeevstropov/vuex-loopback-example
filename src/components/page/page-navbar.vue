<template>

  <!-- Page Navbar -->
  <nav
    class="page-navbar navbar docs-navbar is-spaced has-shadow is-transparent">

    <div
      class="container">

      <div
        class="navbar-brand">

        <router-link
          to="/"
          active-class=""
          class="navbar-item">

          <img
            alt="Vuex-loopback"
            src="../../assets/img/logo-short.svg">

        </router-link>

        <a
          title="Github"
          target="_blank"
          class="navbar-item ml-3"
          href="https://github.com/mikeevstropov/vuex-loopback">

          <b-icon
            icon="github"/>

        </a>

        <span
          class="navbar-burger burger"
          :class="{'is-active': isMenuActive}"
          @click="isMenuActive = !isMenuActive">

          <span/>
          <span/>
          <span/>

        </span>

      </div>

      <div
        class="navbar-menu"
        :class="{'is-active': isMenuActive}">

        <div
          class="navbar-end">

          <router-link
            exact
            to="/"
            class="navbar-item">
            Collections
          </router-link>

          <router-link
            to="/customers"
            class="navbar-item">
            Customers
          </router-link>

          <router-link
            to="/books"
            class="navbar-item">
            Books
          </router-link>

          <router-link
            to="/orders"
            class="navbar-item">
            Orders
          </router-link>

        </div>

      </div>

    </div>

  </nav>

</template>

<script>

  export default {
    name: 'page-navbar',
    props: {
      light: Boolean
    },
    data() {
      return {
        isMenuActive: false,
      }
    },
    watch: {
      '$route.path'() {

        this.isMenuActive = false;
      },
    },
  }

</script>

<style lang="scss">

  .page-navbar {

    img {
      max-height: 2.4rem;
    }
  }

</style>
