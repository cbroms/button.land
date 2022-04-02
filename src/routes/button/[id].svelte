<script>
  import ButtonScaled from '../../components/ButtonScaled.svelte';
  import ColorSection from '../../components/ColorSection.svelte';

  import { onMount } from 'svelte';

  export let data;

  let selected = 1;
  let website = '';
  let meta = null;
  let interactiveTargetElt;

  const setSelected = (index) => {
    selected = index;
    if (interactiveTargetElt) interactiveTargetElt.scrollIntoView({ behavior: 'smooth' });
  };

  $: website = new URL(meta.source).hostname;

  $: {
    if (data.buttons[selected].data.meta) {
      meta = data.buttons[selected].data.meta;
    } else {
      meta = data.buttons[0].data.meta;
    }
  }

  onMount(() => {
    if (data.buttons[0].data.meta.background && data.buttons[0].data.meta.color)
      document.documentElement.style.cssText = `--background:${data.buttons[0].data.meta.background};--text-primary:${data.buttons[0].data.meta.color};`;
  });
</script>

<svelte:head>
  <title>Button.land | {website}</title>
</svelte:head>

<div class="top">
  <ButtonScaled
    scale="8"
    rotation="-45deg"
    offset="-200px"
    height="500px"
    properties={data.buttons[0].data.properties}
  >
    <div slot="button">
      {@html data.buttons[0].content}
    </div>
  </ButtonScaled>
</div>
<div class="scaled-right">
  <div class="buttons">
    <div class="section-info">
      {#if meta?.source}
        <h3><a href={meta.source} target="_blank">{website}</a></h3>
      {/if}
      {#if meta?.added}
        <div>{meta.added}</div>
      {/if}
    </div>
    {#each data.buttons as button, i}
      <div class="button" on:click={() => setSelected(i)}>
        {@html button.content}
      </div>
    {/each}
  </div>

  <div class=" column-item button-scaled" bind:this={interactiveTargetElt}>
    <ButtonScaled scale="3" centered properties={data.buttons[selected].data.properties}>
      <div slot="button">
        {@html data.buttons[selected].content}
      </div>
    </ButtonScaled>
  </div>

  <div class="column-item">
    <ColorSection colors={data.buttons[selected].data.properties.colors} />
  </div>

  <div class="column-item">
    <code>
      <pre>
          {@html data.buttons[selected].html}
      </pre>
    </code>
  </div>
</div>

<style>
  h3 {
    margin-bottom: 0.75rem;
  }
  .top {
    margin: 0 2rem;
  }
  .scaled-right {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 2rem;
    padding-top: 0;
  }

  .button-scaled {
    padding-top: 2rem;
    height: 345px;
  }

  .column-item {
    width: calc(100% - var(--sidebar-width));
    max-width: var(--content-width);
    display: block;
    margin-top: 2rem;
  }

  .section-info {
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
    margin-bottom: 2rem;
  }

  .buttons {
    width: 350px;
    position: fixed;
    top: 6rem;
    left: max(calc((100% - var(--window-max-width)) / 2 + 5rem), 5rem);

    padding: 2rem;
    padding-top: 0;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .button {
    width: 100%;
    margin-bottom: 1rem;
  }

  code {
    padding: 0 20px;
    background-color: #eeeeee;
    display: block;
  }

  pre {
    overflow: scroll;
    margin: 0;
  }

  @media (max-width: 900px) {
    .buttons {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      padding: 0;
      margin-top: 2rem;
    }

    .column-item {
      width: 100%;
    }

    code {
      width: 100%;
    }

    .scaled-right {
      padding: 0;
    }

    .top {
      margin: 0;
    }
  }
</style>
