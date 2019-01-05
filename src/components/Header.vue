<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <router-link to="/">
      <b-navbar-brand>HOME</b-navbar-brand>
    </router-link>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <router-link to="/"></router-link>

        <b-nav-item to="/stocks">Stocks</b-nav-item>

        <b-nav-item to="/profile">Your Profile</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Save & Load" right>
          <b-dropdown-item href="#">save data</b-dropdown-item>
          <b-dropdown-item href="#">load data</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item>balance</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
