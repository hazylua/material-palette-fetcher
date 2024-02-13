<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLSelectAttributes } from 'svelte/elements';

  export let label: string | null = null;
  interface $$Props extends HTMLSelectAttributes {
    label: string | null;
  }
</script>

{#if label}
  <label for={$$restProps.name}>{label}</label>
{/if}
<select
  class={clsx(
    `appearance-none border-solid border-outline
    bg-background px-1.5
    py-0.5
    outline
    outline-1 outline-outline
    hover:border-primary hover:outline-primary
    focus:border-current focus:outline-primary focus:ring-current`,
    $$restProps.class
  )}
  name={$$restProps.name}
  value={$$restProps.value}
>
  <slot />
</select>
