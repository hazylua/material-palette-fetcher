<script lang="ts">
  import clsx from 'clsx';

  export let name: string | null = null;
  export let value: string | null = null;
  export let className: string | null = null;
</script>

<input
  class={clsx(
    `
    appearance-none
    border border-outline
    bg-background
    outline-none
    outline
    hover:border-primary focus:border-current focus:outline-1 focus:outline-primary
    focus:ring-0
    `,
    className
  )}
  type="color"
  {value}
  {name}
/>

<style lang="postcss">
  :global(html) {
  }
  input[type='color'] {
    border-radius: 9999px;
    padding: 0;
  }

  input[type='color']::-moz-color-swatch {
    border: none;
    border-radius: 9999px;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: 9999px;
  }

  input[type='color']::-webkit-color-swatch {
    border: none;
    border-radius: 9999px;
  }
</style>
