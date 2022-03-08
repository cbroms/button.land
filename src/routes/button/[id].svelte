<script>
  import ButtonSection from '../../components/ButtonSection.svelte';
  import ButtonScaledRotated from '../../components/ButtonScaledRotated.svelte';
  import ButtonScaled from '../../components/ButtonScaled.svelte';

  export let data;

  let selected = 1;
  let website = '';
  let meta = null;

  const setSelected = (index) => {
    selected = index;
  };

  $: website = new URL(meta.source).hostname;

  $: {
    if (data.buttons[selected].data.meta) {
      meta = data.buttons[selected].data.meta;
    } else {
      meta = data.buttons[0].data.meta;
    }
  }
</script>

<svelte:head>
  <title>Button.land | {website}</title>
</svelte:head>

<ButtonScaledRotated properties={data.buttons[0].data.properties}>
  <div slot="button">
    {@html data.buttons[0].content}
  </div>
</ButtonScaledRotated>

<div class="scaled-right">
  <div class="buttons">
    <div class="section-info">
      {#if meta?.source}
        <div><a href={meta.source} target="_blank">{website}</a></div>
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

  <ButtonScaled properties={data.buttons[selected].data.properties}>
    <div slot="button">
      {@html data.buttons[selected].content}
    </div>
  </ButtonScaled>

  <code>
    <pre>
        {@html data.buttons[selected].html}
    </pre>
  </code>
</div>

<!-- 
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
</ButtonSection> -->
<style>
  .scaled-right {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 4rem;
  }

  .section-info {
    width: 100%;
    border-bottom: 1px solid;
    margin-bottom: 2rem;
  }

  .buttons {
    width: 350px;
    position: fixed;
    top: 2rem;
    left: 2rem;

    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .button {
    width: 100%;
    margin-bottom: 1rem;
  }

  code {
    margin-top: 2rem;
    display: block;
    max-width: var(--content-width);
    width: calc(100% - var(--sidebar-width));
    padding: 0 20px;
    background-color: #eeeeee;
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
    }

    code {
      width: 100%;
    }
  }
</style>
