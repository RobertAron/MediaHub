<template>
  <div>
    <b-card>
      <h2>Upload a file!</h2>
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-title"
          label="Title:"
          label-for="title-input"
        >
          <b-form-input
            id="title-input"
            type="text"
            v-model="title"
            placeholder="Title your content"
            required
          />
        </b-form-group>
        <!-- hmm https://flaviocopes.com/how-to-upload-files-fetch/ -->
        <b-form-group
          id="input-group-file"
          label="File:"
          label-for="file-input"
          description="Media content will be shown to users!"
        >
          <b-form-file
            id="file-input"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            v-model="file"
            required
          />
        </b-form-group>
        <p>
          File size must be under 6mb. The current file is
          {{ file.size / 1000000 }}mb
        </p>
        <b-form-group
          id="input-group-description"
          label="Description:"
          label-for="description-input"
        >
          <b-form-textarea
            id="description-input"
            v-model="description"
            placeholder="Tell us about what you're uploading!"
            rows="3"
            max-rows="6"
          />
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as a from 'axios'
import {createFile} from '../sdk'


export default Vue.extend({
  data(){
    return {
      title: '',
      file: new File([],''),
      description: ''
    }
  },
  methods: {
    async onSubmit(event: Event) {
      if (!(event.target instanceof HTMLFormElement)) return;
      const res = await createFile(this.title, this.file, this.description)
      this.$router.push({name: 'FileDetails', params:{id:res.id}} )
    }
  }
})
</script>
