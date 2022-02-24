<script>
  export let enlargedBackground;
  export let enlargedBorder;
  export let enlargedBorderRadius;
</script>

<div class="section-wrapper">
  <div class="section-main">
    <div class="button-main"><slot name="button" /></div>
  </div>
  <div
    class="section-enlarged"
    style="border-color: {enlargedBorder}; background-color: {enlargedBackground}; border-radius: {enlargedBorderRadius};"
  >
    <div class="button-enlarged"><slot name="button" /></div>
  </div>
</div>

<style>
  .section-wrapper {
    height: 600px;
    width: 600px;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
  }

  .section-main {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-enlarged {
    width: 300px;
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
    left: 100%;
  }
</style>
