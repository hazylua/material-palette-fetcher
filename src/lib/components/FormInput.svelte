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
  class="border-solid px-1.5 py-0.5 outline outline-1 dark:border-neutral-500 dark:bg-neutral-700 dark:outline-neutral-500 dark:focus:border-current dark:focus:outline-indigo-500 dark:focus:ring-current"
  {value}
  {name}
  {placeholder}
/>
