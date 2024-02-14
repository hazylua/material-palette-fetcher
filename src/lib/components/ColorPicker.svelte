<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLInputAttributes } from 'svelte/elements';

  export let name: string | null = null;
  export let value: string | null = null;

  interface $$Props extends HTMLInputAttributes {}
</script>

<input
  class={clsx(
    `
    appearance-none
    border-2 border-solid border-outline
    bg-background
    outline-none
    outline
    focus:border-current focus:outline-primary  focus:ring-offset-background
    `,
    $$restProps.class
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
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: 9999px;
  }

  input[type='color']::-webkit-color-swatch {
    border: none;
  }
</style>
