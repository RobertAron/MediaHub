<template>
  <div class="media-items">
    <!-- TODO: card that goes to the browse thing -->
    <!-- https://mediasilo.com/ -->
    <div>
      <b-link :to="{ name: 'Upload'}" class='descrete-link'>
        <b-card class="card" body-class='create-card' to="yo">
          <h4>Upload New File <b-icon-upload/></h4>
        </b-card>
      </b-link>
    </div>
    <div v-for="item in content" :key="item.id">
      <b-card no-body class="card">
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
          <b-card-body class="picture-body">
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
    <div v-for="n in isLoading?2:0" :key='n'>
      <b-skeleton-img/>
    </div>
  </div>
</template>

<script lang="ts">
import { Content } from "@/FileData";
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
  > div {
    padding-top: 100%;
    position: relative;
    > * {
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
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
  right:20px;
  top: 20px;
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

.picture-body{
  padding: calc(var(--spacing) / 4)var(--spacing);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,.0) 0%,
    rgba(0,0,0,.3) 20%,
    rgba(0,0,0,1) 90%,
  )
}
</style>
