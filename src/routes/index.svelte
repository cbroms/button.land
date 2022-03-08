<script>
  import ButtonSectionPreview from '../components/ButtonSectionPreview.svelte';
  import ButtonScaled from '../components/ButtonScaled.svelte';
  export let data;

  let website = '';

  $: website = new URL(data[0].buttons[0].data.meta.source).hostname;
</script>

<svelte:head>
  <title>Button.land</title>
</svelte:head>

<a href="/button/{data[0].id}" class="button-link">
  <ButtonScaled properties={data[0].buttons[0].data.properties} scale="4">
    <div slot="button">
      {@html data[0].buttons[0].content}
    </div>
  </ButtonScaled>
</a>

<div class="buttons">
  {#each data as buttonSection, i}
    {#if i !== -1}
      <a href="/button/{buttonSection.id}" class="button-link button-preview">
        <ButtonSectionPreview {...buttonSection.buttons[0].data.properties}>
          <div slot="button">
            {@html buttonSection.buttons[0].content}
          </div>
        </ButtonSectionPreview>
      </a>
    {/if}
  {/each}
</div>

<style>
  .buttons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 40px 40px 0 40px;
  }

  .button-link {
    display: block;
    margin-bottom: 2rem;
  }

  .button-preview {
    flex-grow: 4;
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
