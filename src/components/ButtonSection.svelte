<script>
  export let background;
  export let border;
  export let borderRadius;
</script>

<div class="section-wrapper">
  <div class="section-main">
    <slot name="buttons" />
  </div>
  <div
    class="section-enlarged"
    style="border: {border}; background: {background}; border-radius: {borderRadius};"
  >
    <div class="button-enlarged"><slot name="button-enlarged" /></div>
  </div>
</div>

<style>
  .section-wrapper {
    height: 400px;
    width: 800px;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .section-main {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .section-enlarged {
    width: 375px;
    height: 100%;
    border: 1px solid;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }
  .button-enlarged {
    transform: scale(4);
    position: relative;
    transform-origin: left;
    /* left: 100%; */
    left: 100px;
  }
</style>
