<script lang="ts">
  import type { HTMLInputTypeAttribute } from 'svelte/elements';

  export let label: string | null = null;
  export let name: string | null = null;
  export let placeholder: string | null = null;
  export let value: string | null = null;
  export let type: HTMLInputTypeAttribute | null | undefined = null;
</script>

{#if label}
  <label for={name}>{label}</label>
{/if}
<input
  class="appearance-none border-solid border-outline bg-background px-1.5
   py-0.5
    outline
     outline-1 outline-outline
     focus:outline-primary focus:ring-current dark:focus:border-current"
  {type}
  {value}
  {name}
  {placeholder}
/>
