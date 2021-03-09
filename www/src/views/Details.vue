<template>
  <div v-if="this.current.status==='Complete'" class='details-container'>
    
    <VuePlayerVue v-if="this.current.content.videoSrc !== undefined">
      <source :src="this.current.content.videoSrc" :type="this.current.content.videoType" />
      Sorry, your browser doesn't support embedded videos.
    </VuePlayerVue>

    <picture v-else-if="this.current.content.imageSrc !== undefined">
      <img :src="this.current.content.imageSrc"/>
    </picture>

    <p v-else>No preview is available for this content.</p>
    <b-card>
      <dir class="header">
        <h1>{{ this.current.content.title }}</h1>
        <b-dropdown variant="primary" text="Actions" right>
          <b-dropdown-item :href="this.current.content.downloadUrl" download><b-icon-download/> Download</b-dropdown-item>
          <b-dropdown-item @click="deleteItem"><b-icon-trash/> Delete</b-dropdown-item>
        </b-dropdown>
      </dir>

      <p>
        <sub>
          <time :datetime="new Date(this.current.content.createdDate).toString()">
            {{ new Date(this.current.content.createdDate).toLocaleString() }}
          </time>
        </sub>
      </p>
      <p>{{ this.current.content.description }}</p>
    </b-card>

    
  </div>
  <div v-else-if="this.current.status==='Loading'">
      <b-card>
      <b-skeleton-img/>
      <b-skeleton/>
      <b-skeleton type="input"></b-skeleton>
    </b-card>
  </div>
  <div v-else>
    <p>Error loading content. Are you sure you have the right url?</p>
  </div>
</template>

<script lang="ts">
import { Content } from "@/FileData";
import Vue from "vue";
import { getFile, deleteFile } from "../sdk";
import VuePlayerVue from "../components/VideoJsVue.vue";

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
  video: any
};

const playerOptions = {
  fluid: true
}

export default Vue.extend({
  data() {
    return {
      current: { status: "Loading" },
      video: null
    } as DetailsData;
  },
  async created() {
    await this.loadContent();
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
  components: {
    VuePlayerVue
  }
});
</script>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.details-container{
  display:grid;
  gap: var(--spacing);
}
</style>