<script>
  export let meta;
  export let properties;
  export let source;
  export let website;
</script>

<div class="section-wrapper">
  <div class="section-main">
    <div class="section-info">
      {#if meta?.source}
        <div><a href={meta.source} target="_blank">{website}</a></div>
      {/if}
      {#if meta?.added}
        <div>{meta.added}</div>
      {/if}
    </div>
    <slot name="buttons" />
  </div>
  <div class="section-secondary">
    <div
      class="section-enlarged"
      style="border: {properties.border}; background: {properties.background}; border-radius: {properties.borderRadius};"
    >
      <div class="button-enlarged"><slot name="button-enlarged" /></div>
    </div>

    <details>
      <summary>View source</summary>
      <code>
        <pre>
            {@html source}
        </pre>
      </code>
    </details>
  </div>
</div>

<style>
  code {
    display: block;
    width: 100%;
    padding: 20px;
    background-color: #eeeeee;
  }

  pre {
    overflow: scroll;
    margin: 0;
  }

  details {
    width: 100%;
  }
  summary {
    cursor: pointer;
    margin-top: 1rem;
  }

  .section-wrapper {
    height: 100vh;
    padding: 40px 40px 0 40px;
    overflow: scroll;
    min-height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .section-info {
    width: 100%;
    border-bottom: 1px solid;
    margin-bottom: 40px;
    align-self: flex-start;
    height: 55px;
  }

  .section-info > div {
    margin: 5px 0;
  }

  .section-secondary {
    /* padding: 0 40px; */
    width: calc(100vw - 400px);
    max-width: 850px;
    height: 100%;
    padding-top: 55px;
  }

  .section-main {
    flex-shrink: 0;
    width: fit-content;
    min-width: 350px;
    height: 415px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: sticky;
    top: 0;
    padding-right: 40px;
  }

  .section-enlarged {
    height: 345px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .button-enlarged {
    transform: scale(4);
    position: relative;
    transform-origin: center;
    /* left: 100%; */
    /* left: 100px; */
  }

  @media (max-width: 1200px) {
    .section-enlarged {
      /* width: calc(100vw - 375px); */
      justify-content: flex-start;
    }

    .button-enlarged {
      transform-origin: left;
      left: 75px;
    }
  }

  @media (max-width: 640px) {
    .section-wrapper {
      flex-wrap: wrap;
    }

    .section-main {
      position: relative;
      padding-right: 0;
      height: auto;
    }

    .section-secondary {
      width: 100%;
    }
    .section-main {
      width: 100%;
    }
  }
</style>
