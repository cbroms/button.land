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
    width: 445px;
    display: flex;
    justify-content: center;
    padding: 40px;
  }

  @media (max-width: 525px) {
    .button-preview {
      width: 100%;
      /* padding: 2rem 0; */
    }
  }
</style>
