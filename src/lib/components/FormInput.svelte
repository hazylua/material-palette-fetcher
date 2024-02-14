<script lang="ts">
  import type { HTMLInputTypeAttribute } from 'svelte/elements';

  export let name: string | null = null;
  export let placeholder: string | null = null;
  export let value: string | null = null;
  export let type: HTMLInputTypeAttribute | null | undefined = null;
</script>

<input
  class="
  appearance-none rounded
  border border-outline
  bg-background
  px-2 py-1
  outline-none
  hover:border-primary
  focus:border-current focus:outline-primary focus:ring-0
  "
  {type}
  {value}
  {name}
  {placeholder}
/>
