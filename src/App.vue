<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Media Hub</b-navbar-brand>
      <!-- upload link -->
      <!-- browse link -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Browse</b-nav-item>
          <b-nav-item to="/upload">Upload</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid="lg" class="test">
      <router-view />
    </b-container>
  </div>
</template>
