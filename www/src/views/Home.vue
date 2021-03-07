<template>
  <div class="media-items">
    <!-- TODO: card that goes to the browse thing -->
    <!-- https://mediasilo.com/ -->
    <b-link :to="{ name: 'Upload'}" class='descrete-link'>
      <b-card class="card" body-class='create-card' to="yo">
        <h4>Upload New File <b-icon-upload/></h4>
      </b-card>
    </b-link>

    <b-card v-for="item in content" :key="item.id" no-body class="card">
      <b-button :href="item.downloadUrl" download class="floatingButton" variant="outline-primary">
        <b-icon icon="download" aria-label="download" />
      </b-button>
      <b-link :to="{ name: 'FileDetails', params: { id: item.id } }">
        <div class="picture-area">
          <picture v-if="item.imageSrc">
            <img :src="item.imageSrc" :alt="item.title" />
          </picture>
          <picture v-else>
            <ClipIcon width="100%" height="100%" />
          </picture>
        </div>
        <b-card-body>
          <h4>{{ item.title }}</h4>
          <p>
            <small>
              Uploaded {{ new Date(item.uploadedTimestamp).toLocaleString() }}
            </small>
          </p>
        </b-card-body>
      </b-link>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Content } from "@/fakeDB";
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
  content: Content[]  = [];

  async mounted(){
    const res = await listFiles()
    this.content = res
    this.isLoading = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.media-items {
  display: grid;
  gap: var(--spacing);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.picture-area {
  width: 100%;
  height: 100%;
  > picture > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.floatingButton {
  background: white;
  position: absolute;
  right: calc(var(--spacing) / 2);
  top: calc(var(--spacing) / 2);
}
.create-card{
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
}
</style>
