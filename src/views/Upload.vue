<template>
  <div>
    <h2>Upload a file!</h2>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter email"
          name="email"
          required
        />
      </b-form-group>
      <b-form-textarea
        placeholder="Tell us about what you're uploading!"
        rows="3"
        max-rows="6"
      />
      <!-- hmm https://flaviocopes.com/how-to-upload-files-fetch/ -->
      <b-form-file
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        name="file"
        required
      />
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
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
