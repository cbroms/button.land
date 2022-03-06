<script>
  import ButtonSectionPreview from '../components/ButtonSectionPreview.svelte';

  export let data;

  let website = '';

  $: website = new URL(data[0].buttons[0].data.meta.source).hostname;
</script>

<svelte:head>
  <title>Button.land</title>
</svelte:head>

<div class="buttons">
  {#each data as buttonSection, i}
    {#if i === 0}
      <div class="weekly">
        This week's buttons &mdash; {website}
      </div>
    {/if}
    <a href="/button/{buttonSection.id}" class="button-link">
      <ButtonSectionPreview {...buttonSection.buttons[0].data.properties}>
        <div slot="button">
          {@html buttonSection.buttons[0].content}
        </div>
      </ButtonSectionPreview>
    </a>
    {#if i === 0}
      <div class="weekly-separator" />
    {/if}
  {/each}
</div>

<style>
  .buttons {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 40px 0 40px;
  }

  .button-link {
    display: block;
    margin-bottom: 2rem;
  }

  .weekly {
    margin-bottom: 1.5rem;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--text-primary);
  }

  .weekly-separator {
    margin-bottom: 4rem;
  }
</style>
