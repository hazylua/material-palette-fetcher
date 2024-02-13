<script lang="ts">
  export let label: string | null = null;
  export let name: string;
  export let checked: boolean | null = false;
  export let value: string;
</script>

<input
  class="h-4 w-4 appearance-none rounded-full
  border-primary border-2
  bg-background text-primary ring-offset-primary focus:ring-2 focus:ring-primary focus:ring-offset-background"
  type="radio"
  {value}
  {checked}
  {name}
/>
<label for={name}>{label}</label>
