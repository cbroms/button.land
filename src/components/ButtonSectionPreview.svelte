<script>
  export let background;
  export let border;
  export let borderRadius;
</script>

<div
  class="button-preview"
  style="background-color: {background}; border: {border}; border-radius: {borderRadius};"
>
  <slot name="button" />
</div>

<style>
  .button-preview {
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px;
  }
</style>
