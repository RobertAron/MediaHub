<template>
  <div class="media-items">
    <b-card no-body v-for="item in content" :key="item.uuid" class="card">
      <b-button :href="item.downloadUrl" download>
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
        <h4>{{ item.title }}</h4>
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

type FileBase = {
  uuid: string;
  title: string;
  description: string;
  downloadUrl: string;
  uploadedTimestamp: number;
};

type Picture = {
  avifSrc?: string;
  webpSrc?: string;
  mainSrc: string;
} & FileBase;

type Video = {
  webmSrc?: string;
  mp4: string;
} & Picture;

type Content = FileBase | Picture | Video;

@Component({
  components: {
    ClipIcon
  }
})
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string;
  content: Content[] = [
    {
      uuid: `${-1}`,
      title: "yooo",
      description: "A picture of myself",
      downloadUrl: "/sub-content/testPhoto.jpg",
      uploadedTimestamp: 0,
      mainSrc: "/sub-content/testPhoto.jpg"
    },
    ...new Array(30).fill(null).map(
      (ele, index): Content => ({
        uuid: `${index}`,
        title: `item ${index}`,
        description: "some description goes into this location",
        downloadUrl: "someurlToDownload",
        uploadedTimestamp: 0
      })
    )
  ];
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
  > a {
    position: absolute;
    right: calc(var(--spacing) / 2);
    top: calc(var(--spacing) / 2);
  }
}
</style>
