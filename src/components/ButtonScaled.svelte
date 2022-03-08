<script>
  export let properties;
</script>

<div
  class="section-enlarged"
  style="border: {properties.border}; background: {properties.background}; border-radius: {properties.borderRadius};"
>
  <div class="button-enlarged"><slot name="button" /></div>
</div>

<style>
  .section-enlarged {
    height: 345px;
    width: calc(100% - var(--sidebar-width));
    max-width: var(--content-width);
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .button-enlarged {
    transform: scale(3);
    position: relative;
    transform-origin: center;
    /* left: 100%; */
    /* left: 100px; */
  }

  @media (max-width: 900px) {
    .section-enlarged {
      width: 100%;
      justify-content: flex-start;
    }

    .button-enlarged {
      transform-origin: left;
      left: 75px;
    }
  }
</style>
