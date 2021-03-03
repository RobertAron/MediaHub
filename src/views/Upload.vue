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
            name="title"
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
            name="file"
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

@Component
export default class Upload extends Vue {
  // @Prop() private msg!: string;
  onSubmit(event: Event) {
    if (!(event.target instanceof HTMLFormElement)) return;
    const formElement: HTMLFormElement = event.target;
    const inputs = [...formElement.getElementsByTagName("input")];
    const values = inputs
      .filter(({ name }) => name)
      .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
    console.log(values);
  }
}
</script>
