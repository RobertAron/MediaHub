<template>
  <div v-if="this.current.status==='Complete'">
    <dir class="header">
      <h1>{{ this.current.content.title }}</h1>
      <b-dropdown variant="primary" text="Actions" right>
        <b-dropdown-item :href="this.current.content.downloadUrl"><b-icon-download/> Download</b-dropdown-item>
        <b-dropdown-item @click="deleteItem"><b-icon-trash/> Delete</b-dropdown-item>
      </b-dropdown>
    </dir>
    
    <video controls v-if="this.current.content.videoSrc !== undefined"  class="video-js vjs-theme-city">
      <source :src="this.current.content.videoSrc" :type="this.current.content.videoType" />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <picture v-else-if="this.current.content.imageSrc !== undefined">
      <img :src="this.current.content.imageSrc"/>
    </picture>

    <p v-else>No preview is available for this content.</p>


    <p>
      <sub>
        <time :datetime="new Date(this.current.content.createdDate).toString()">
          {{ new Date(this.current.content.createdDate).toLocaleString() }}
        </time>
      </sub>
    </p>
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
import { Content } from "@/FileData";
import Vue from "vue";
import { getFile, deleteFile } from "../sdk";
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
    async deleteItem(){
      await deleteFile(this.$route.params.id)
      this.$router.push({name:'Home'})
    }
  },
});
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
video {
  width: 100%;
}
</style>