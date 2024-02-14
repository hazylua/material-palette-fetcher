<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export let className: string | null = null;

  interface $$Props extends Omit<HTMLButtonAttributes, 'class'> {
    className?: string | null;
  }
</script>

<button
  class={clsx(
    `appearance-none rounded border-solid border-outline
    bg-background px-1.5
    py-0.5
    outline
    outline-1 outline-outline
    hover:border-primary hover:outline-primary
    focus:border-current focus:outline-primary focus:ring-current`,
    $$restProps.class
  )}
  {...$$restProps}
>
  <slot />
</button>
