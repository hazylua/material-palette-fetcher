<script lang="ts">
  export let label: string | null = null;
  export let name: string;
  export let checked: boolean;
</script>

<input
  class="h-4 w-4 appearance-none rounded text-indigo-500 focus:ring-2 dark:border-indigo-500 dark:bg-neutral-700 dark:ring-offset-neutral-800 dark:focus:ring-white"
  type="checkbox"
  {checked}
  {name}
/>
<label for={name}>{label}</label>
