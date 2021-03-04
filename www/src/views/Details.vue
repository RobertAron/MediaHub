<template>
  <div v-if="this.current.status==='Complete'">
    <h1>{{ this.current.content.title }}</h1>
    <p>
      <sub>
        <date>
          {{ new Date(this.current.content.uploadedTimestamp).toLocaleString() }}
        </date>
      </sub>
    </p>
    
    <video controls v-if="this.current.content.mp4 !== undefined">
      <source :src="this.current.content.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <picture v-else-if="this.current.content.mainSrc !== undefined">
      <img :src="this.current.content.mainSrc"/>
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
import { Content, db } from "@/fakeDB";
import Vue from "vue";
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
    loadContent() {
      setTimeout(() => {
        if (db[this.$route.params.uuid] === undefined) {
          this.current.status = "Error";
        } else {
          this.current = {
            status: 'Complete',
            content: db[this.$route.params.uuid]
          }
        }
      }, 1000);
    },
  },
});
</script>


<style lang="scss" scoped>
video {
  width: 100%;
}
</style>