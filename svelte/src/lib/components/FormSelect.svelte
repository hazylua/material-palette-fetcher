<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLSelectAttributes } from 'svelte/elements';

  interface $$Props extends HTMLSelectAttributes {}
</script>

<select
  class={clsx(
    ` 
    appearance-none rounded
    border border-outline
    bg-background
    px-2 py-1
    outline-none
    hover:border-primary
    focus:border-current focus:outline-primary focus:ring-0
    `,
    $$restProps.class
  )}
  name={$$restProps.name}
  value={$$restProps.value}
>
  <slot />
</select>
