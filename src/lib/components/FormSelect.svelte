<script lang="ts">
  export let label: string | null = null;
  export let name: string;
  export let value: string;
</script>

{#if label}
  <label for={name}>{label}</label>
{/if}
<select
  class="px-1.5 py-0.5 border-solid bg-neutral-700 border-indigo-500 focus:border-current focus:ring-0 rounded"
  {name}
  {value}
>
  <slot />
</select>
