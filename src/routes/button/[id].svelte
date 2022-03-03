<script>
  import ButtonSection from '../../components/ButtonSection.svelte';

  export let data;

  let selected = 0;
  let website = '';

  const setSelected = (index) => {
    selected = index;
  };

  $: website = new URL(data.buttons[0].data.meta.source).hostname;
</script>

<svelte:head>
  <title>Button.land | {website}</title>
</svelte:head>

<ButtonSection
  meta={data.buttons[0].data.meta}
  properties={data.buttons[selected].data.properties}
  source={data.buttons[selected].html}
  {website}
>
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
    margin: 30px 0;
  }
</style>
