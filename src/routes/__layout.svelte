<div class="wrapper">
  <slot />
</div>

<style>
  .wrapper {
    max-width: calc(var(--window-max-width) + 1rem);
    padding: 1rem;
    margin: 0 auto;
  }
</style>
