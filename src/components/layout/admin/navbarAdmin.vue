<template>
    <div>
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/cpanel">SecretAdmin</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#/historyScan">LỊCH SỬ QUÉT</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          {{ this.$session.get('auth').name }}
        </template>
        <b-dropdown-item @click="signOut">Đăng xuất</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    signOut(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>