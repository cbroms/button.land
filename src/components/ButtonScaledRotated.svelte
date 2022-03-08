<script>
  export let properties;
</script>

<div
  class="section-enlarged"
  style="border: {properties.border}; background: {properties.background};"
>
  <div class="button-enlarged"><slot name="button" /></div>
</div>

<style>
  .button-enlarged {
    transform: scale(8) rotate(-45deg);
    position: relative;
    transform-origin: left;
    margin-bottom: -200px;
  }

  .section-enlarged {
    height: 550px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
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
