<script>
  import ButtonSectionPreview from '../components/ButtonSectionPreview.svelte';
  import ButtonScaled from '../components/ButtonScaled.svelte';

  import { onMount } from 'svelte';

  export let data;

  let website = '';

  $: website = new URL(data[0].buttons[0].data.meta.source).hostname;

  onMount(() => {
    document.documentElement.style.cssText = `--background:#fff;--text-primary:#000;`;
  });
</script>

<svelte:head>
  <title>Button.land</title>
</svelte:head>

<a href="/button/{data[0].id}" class="button-link top">
  <ButtonScaled properties={data[0].buttons[0].data.properties} scale="4">
    <div slot="button">
      {@html data[0].buttons[0].content}
    </div>
  </ButtonScaled>
  <div class="title">
    <div class="title-decorator">Button of the week</div>
    {#if data[0].buttons[0].data.meta.source}
      <h1>{website}</h1>
    {/if}
    {#if data[0].buttons[0].data.meta.added}
      <div>{data[0].buttons[0].data.meta.added}</div>
    {/if}
  </div>
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
    gap: 2rem;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
  }

  .button-link {
    display: block;
    margin-bottom: 2rem;
    position: relative;
  }

  .top {
    margin-top: 4rem;
  }

  .title {
    position: absolute;
    top: 6rem;
    left: 4rem;
  }

  .title-decorator {
    border-bottom: 1px solid;
  }

  @media (max-width: 1400px) {
    .buttons {
      padding: 2rem;
      justify-content: center;
    }
  }

  @media (max-width: 525px) {
    .button-preview {
      width: 100%;
    }
  }

  /* .weekly {
    margin-bottom: 1.5rem;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--text-primary);
  }

  .weekly-separator {
    margin-bottom: 4rem;
  } */
</style>
