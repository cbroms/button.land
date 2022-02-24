<script>
  import ButtonSection from '../components/ButtonSection.svelte';
</script>

<ButtonSection
  enlargedBackground="#ddf4ff"
  enlargedBorder="rgba(84,174,255,0.4)"
  enlargedBorderRadius="6px"
>
  <a href="" class="btn" slot="button">Set up template</a>
</ButtonSection>

<style>
  .btn:hover {
    background-color: #2c974b;
    border-color: rgba(27, 31, 36, 0.15);
  }
  .btn {
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: all;
    transition-property: color, background-color, border-color;

    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-left-color: currentcolor;
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-decoration: none;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';

    color: #ffffff;
    background-color: #2da44e;
    border-color: rgba(27, 31, 36, 0.15);
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }
</style>
