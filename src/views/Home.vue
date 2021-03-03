<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <h2>test</h2>
    <form>
      <h3>put the form stuff here</h3>
    </form>
    <div>
      <h4>put all the media content here</h4>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.test {
  background: red;
  padding: var(--spacing) 0;
}
</style>
