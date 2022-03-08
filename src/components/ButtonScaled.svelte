<script>
  export let properties;
  export let scale;
  export let rotation = '0deg';
  export let offset = '';
  export let height = '300px';
  export let centered = false;
</script>

<div
  class="section-enlarged"
  style="border: {properties.border}; background: {properties.background}; border-radius: {properties.borderRadius}; height: {height};"
>
  <div
    class="button-enlarged {centered ? 'centered' : ''}"
    style="transform: scale({scale}) rotate({rotation}); margin-bottom: {offset};"
  >
    <slot name="button" />
  </div>
</div>

<style>
  .section-enlarged {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .button-enlarged {
    position: relative;
    transform-origin: left;
  }

  .centered {
    transform-origin: center;
  }

  @media (max-width: 900px) {
    .section-enlarged {
      justify-content: flex-start;
    }

    .button-enlarged {
      transform-origin: left;
      left: 75px;
    }
  }
</style>
