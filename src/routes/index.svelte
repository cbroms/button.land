<script>
  import ButtonSectionPreview from '../components/ButtonSectionPreview.svelte';

  export let data;
</script>

{#each data as buttonSection}
  <a href="/button/{buttonSection.id}">
    <ButtonSectionPreview {...buttonSection.buttons[0].data}>
      <div slot="button">
        {@html buttonSection.buttons[0].content}
      </div>
    </ButtonSectionPreview>
  </a>
{/each}
