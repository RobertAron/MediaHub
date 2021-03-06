<template>
  <div class="media-items">
    <!-- TODO: card that goes to the browse thing -->
    <!-- https://mediasilo.com/ -->
    <b-card v-for="item in content" :key="item.uuid" no-body class="card">
      <b-button :href="item.downloadUrl" download class="floatingButton">
        <b-icon icon="download" aria-label="download" />
      </b-button>
      <div class="picture-area">
        <picture v-if="item.mainSrc">
          <img :src="item.mainSrc" :alt="item.title" />
        </picture>
        <picture v-else>
          <ClipIcon width="100%" height="100%" />
        </picture>
      </div>
      <b-card-body>
        <b-link :to="{ name: 'FileDetails', params: { uuid: item.uuid } }">
          <h4>{{ item.title }}</h4>
        </b-link>
        <p>
          <small>
            Uploaded {{ new Date(item.uploadedTimestamp).toLocaleString() }}
          </small>
        </p>
        <p>{{ item.description }}</p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ClipIcon from "../assets/clip.svg";
import { listFiles, tempRes } from "../sdk";

@Component({
  components: {
    ClipIcon,
  },
})
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string;
  isLoading = true
  content: tempRes[]  = [];

  async mounted(){
    const res = await listFiles()
    this.content = res
    console.log('list ressss')
    console.log(res)
    this.isLoading = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.media-items {
  display: grid;
  gap: var(--spacing);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.picture-area {
  width: 100%;
  height: 200px;
  > picture > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card {
  position: relative;
  overflow: hidden;
  > .floatingButton {
    position: absolute;
    right: calc(var(--spacing) / 2);
    top: calc(var(--spacing) / 2);
  }
}
</style>
