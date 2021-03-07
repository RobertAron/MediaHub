<template>
  <div v-if="this.current.status==='Complete'">
    <h1>{{ this.current.content.title }}</h1>
    <p>
      <sub>
        <time :datetime="new Date(this.current.content.uploadedTimestamp).toString()">
          {{ new Date(this.current.content.uploadedTimestamp).toLocaleString() }}
        </time>
      </sub>
    </p>
    
    <video controls v-if="this.current.content.videoSrc !== undefined">
      <source :src="this.current.content.videoSrc" :type="this.current.content.videoType" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <picture v-else-if="this.current.content.imageSrc !== undefined">
      <img :src="this.current.content.imageSrc"/>
    </picture>
    <p v-else>No preview is available for this content.</p>
    <p>{{ this.current.content.description }}</p>
  </div>
  <div v-else-if="this.current.status==='Loading'">
    <b-skeleton/>
    <b-skeleton-img/>
    <b-skeleton/>
  </div>
  <div v-else>
    <p>Error loading content. Are you sure you have the right url?</p>
  </div>
</template>

<script lang="ts">
import { Content } from "@/fakeDB";
import Vue from "vue";
import { getFile } from "../sdk";
type LoadingContent = {
  status: "Loading";
};
type ErrorContent = {
  status: "Error";
};
type LoadedContent = {
  status: "Complete";
  content: Content;
};

type DetailsData = {
  current: LoadingContent | ErrorContent | LoadedContent;
};

export default Vue.extend({
  data() {
    return {
      current: { status: "Loading" },
    } as DetailsData;
  },
  created() {
    this.loadContent();
  },
  methods: {
    async loadContent() {
      try{
        const res = await getFile(this.$route.params.id)
        this.current = {
          status: 'Complete',
          content: res
        }
      }
      catch(err){
        console.error(err)
        this.current.status = "Error";
      }
    },
  },
});
</script>


<style lang="scss" scoped>
video {
  width: 100%;
}
</style>