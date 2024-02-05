<script lang="ts">
  export let label: string | null = null;
  export let name: string;
  export let placeholder: string;
  export let value: string;
</script>

{#if label}
  <label for={name}>{label}</label>
{/if}
<input
  class={'px-1.5 py-0.5 bg-neutral-700 border-indigo-500 rounded focus:border-current focus:ring-0'}
  {value}
  {name}
  {placeholder}
/>
