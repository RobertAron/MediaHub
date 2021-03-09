<template>
  <div>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Error uploading file :(
    </b-alert>  
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
        <b-form-group
          id="input-group-file"
          label="File:"
          label-for="file-input"
          :description='fileHelperText'
        >
          <b-form-file
            id="file-input"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            v-model="file"
            :state='fileState'
            required
          />
        </b-form-group>

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
        <div class='button-group'>
          <b-button type="submit" variant="primary" :disabled='isLoading'>Submit</b-button>
          <b-button :to="{name:'Home'}" variant="secondary">Cancel</b-button>
        </div>
      </b-form>
    </b-card>
    <b-progress v-if="isLoading" :value="percentageComplete" :max="1" show-progress animated></b-progress>
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
      file: null  as File | null,
      description: '',
      isLoading: false,
      percentageComplete: 0,
      showDismissibleAlert: false
    }
  },
  computed: {
    fileHelperText(): string{
      const fileSize = this.file? Math.round(this.file.size / 10000) /100 :  null
      const sizeText = this.file? ` The current file size is ${fileSize}`:''
      const helperText = `File size must be under 5MB.${sizeText}`
      return helperText
    },
    fileState(): boolean | null {
      if(this.file  === null) return null
      if(this.file.size > 5 * 1000000) return false
      return null
    }
  },
  methods: {
    async onSubmit(event: Event) {
      if (!(event.target instanceof HTMLFormElement)) return;
      if(this.file === null) return
      if(this.file.size> 5 * 1000000) return
      this.isLoading = true
      try{
        const res = await createFile(this.title, this.file, this.description, (progressEvent)=>{
          this.percentageComplete = progressEvent.loaded / progressEvent.total
        })
        this.$router.push({name: 'FileDetails', params:{id:res.id}} )
      }
      catch(err){
        console.error(err)
        this.isLoading = false
        this.percentageComplete = 0
        this.showDismissibleAlert = true
      }
    }
  }
})
</script>


<style lang="scss" scoped>
.button-group{
  display: grid;
  gap: var(--spacing);
  grid-auto-flow: column;
  grid-auto-columns: min-content;
}
</style>