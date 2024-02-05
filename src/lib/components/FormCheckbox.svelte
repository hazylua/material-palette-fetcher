<script lang="ts">
  export let label: string | null = null;
  export let name: string;
  export let checked: boolean;
</script>

<input
  class="w-4 h-4 text-indigo-500 rounded dark:border-indigo-500 dark:focus:ring-white dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700"
  type="checkbox"
  {checked}
  {name}
/>
<label for={name}>{label}</label>
