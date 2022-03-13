<script>
  export let colors;

  const copyColor = (color, i) => {
    navigator.clipboard.writeText(color);
    colors[i] = '#fff';
    setTimeout(() => {
      colors[i] = color;
    }, 500);
  };
</script>

<div class="color-section">
  {#each colors as color, i}
    <div
      class="color-swatch"
      style="background: {color}"
      title={color}
      on:click={() => copyColor(color, i)}
    />
  {/each}
</div>

<style>
  .color-section {
    display: flex;
    flex-wrap: wrap;
  }

  .color-swatch {
    height: 40px;
    width: 40px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .color-swatch:hover {
    border: 1px solid var(--text-primary);
  }
</style>
