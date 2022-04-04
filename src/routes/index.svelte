<!-- <script context="module">
  export const hydrate = false;
</script> -->
<script>
  import ButtonSectionPreview from '../components/ButtonSectionPreview.svelte';
  import ButtonScaled from '../components/ButtonScaled.svelte';

  import { onMount } from 'svelte';

  export let data;

  let website = '';
  let height = 300;
  let offset = 0;

  $: website = new URL(data[0].buttons[0].data.meta.source).hostname;

  const setHeaderHeight = () => {
    height = window.innerWidth < 900 ? 600 : 300;
    offset = window.innerWidth < 900 ? -240 : 0;
  };

  onMount(() => {
    document.documentElement.style.cssText = `--background:#fff;--text-primary:#000;`;

    setHeaderHeight();

    window.onresize = () => {
      setHeaderHeight();
    };
  });
</script>

<svelte:head>
  <title>button.land</title>
  <meta name="title" content="button.land" />
  <meta property="twitter:title" content="button.land" />
  <meta property="og:title" content="button.land" />

  <meta name="description" content="Find many buttons in button.land" />
  <meta property="og:description" content="Find many buttons in button.land" />
  <meta property="twitter:description" content="Find many buttons in button.land" />

  <meta property="og:type" content="website" />
  <meta property="twitter:card" content="summary_large_image" />

  <meta property="og:url" content="https://button.land/" />
  <meta property="twitter:url" content="https://button.land/" />

  <meta property="og:image" content="https://button.land/social.png" />
  <meta property="twitter:image" content="https://button.land/social.png" />
</svelte:head>

<a href="/button/{data[0].id}">
  <div class="button-link top">
    <ButtonScaled
      properties={data[0].buttons[0].data.properties}
      scale="4"
      height="{height}px"
      offset="{offset}px"
    >
      <div slot="button">
        {@html data[0].buttons[0].content}
      </div>
    </ButtonScaled>
    <div class="title" style="color: {data[0].buttons[0].data.meta.color};">
      <div class="title-decorator">Button of the week</div>
      {#if data[0].buttons[0].data.meta.source}
        <h1>{website}</h1>
      {/if}
      {#if data[0].buttons[0].data.meta.added}
        <div>{data[0].buttons[0].data.meta.added}</div>
      {/if}
    </div>
  </div>
</a>

<div class="buttons">
  {#each data as buttonSection, i}
    {#if i !== 0}
      <a href="/button/{buttonSection.id}">
        <div class="button-link button-preview">
          <ButtonSectionPreview {...buttonSection.buttons[0].data.properties}>
            <div slot="button">
              {@html buttonSection.buttons[0].content}
            </div>
          </ButtonSectionPreview>
        </div>
      </a>
    {/if}
  {/each}
</div>

<style>
  .buttons {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1rem;
  }

  .button-link {
    display: block;
    position: relative;
  }

  .button-preview {
    margin: 2rem;
    margin-bottom: 1rem;
  }

  .top {
    margin: 0 2rem;
  }

  .title {
    position: absolute;
    top: 6rem;
    left: 4rem;
    word-break: break-all;
    padding-right: 2rem;
  }

  .title-decorator {
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 1400px) {
    .buttons {
      /* padding: 2rem; */
      justify-content: center;
    }
  }

  @media (max-width: 525px) {
    .button-preview {
      width: 100%;
    }

    .button-link {
      margin: 1rem 0;
    }

    .top {
      margin: 0;
    }

    a {
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
