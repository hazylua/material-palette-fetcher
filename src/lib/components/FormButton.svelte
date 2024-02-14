<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export let className: string | null = null;

  interface $$Props extends Omit<HTMLButtonAttributes, 'class'> {
    className?: string | null;
  }
</script>

<button
  {...$$restProps}
  class={clsx(
    `
    appearance-none rounded
    border border-outline
    bg-background
    px-2 py-1
    outline-none
    focus:border-current focus:outline-1 focus:outline-primary
    `,
    $$restProps.class
  )}
>
  <slot />
</button>
