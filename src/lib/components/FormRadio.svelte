<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLInputAttributes } from 'svelte/elements';

  export let className: string | null = null;

  interface $$Props extends Omit<HTMLInputAttributes, 'class'> {
    className: string | null;
  }
</script>

<input
  class={clsx(
    `h-4 w-4 appearance-none rounded-full
      border-2 border-primary
      bg-background text-primary ring-offset-primary focus:ring-2 focus:ring-primary focus:ring-offset-background`,
    className
  )}
  type="radio"
  {...$$restProps}
/>
