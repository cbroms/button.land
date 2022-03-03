<script>
  import ButtonSectionPreview from '../components/ButtonSectionPreview.svelte';

  export let data;
</script>

<div class="buttons">
  <h1>Button.land</h1>
  <p>A haven for the button ethusiast.</p>
  {#each data as buttonSection}
    <a href="/button/{buttonSection.id}">
      <ButtonSectionPreview {...buttonSection.buttons[0].data.properties}>
        <div slot="button">
          {@html buttonSection.buttons[0].content}
        </div>
      </ButtonSectionPreview>
    </a>
  {/each}
</div>

<style>
  .buttons {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
</style>
