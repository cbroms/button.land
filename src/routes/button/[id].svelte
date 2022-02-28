<script>
  import ButtonSection from '../../components/ButtonSection.svelte';

  export let data;

  let selected = 0;

  const setSelected = (index) => {
    selected = index;
  };
</script>

<ButtonSection {...data.buttons[selected].data}>
  <div slot="buttons">
    {#each data.buttons as button, i}
      <div class="button-slot" on:click={() => setSelected(i)}>
        {@html button.content}
      </div>
    {/each}
  </div>

  <div slot="button-enlarged">
    {@html data.buttons[selected].content}
  </div>
</ButtonSection>

<style>
  .button-slot {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
</style>
