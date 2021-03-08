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
    <b-container fluid="lg" class="mainContainer">
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
:root {
  --spacing: 1.25rem;
}

body {
  overflow-y: scroll;
}

.mainContainer {
  padding: var(--spacing) 0;
}

</style>

<script lang="ts">
import Vue from 'vue'
import '@videojs/themes/dist/sea/index.css';
export default Vue.extend({
  
})
</script>