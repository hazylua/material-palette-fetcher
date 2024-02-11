<script lang="ts">
  export let label: string | null = null;
  export let name: string;
  export let value: string;
</script>

{#if label}
  <label for={name}>{label}</label>
{/if}
<select
  class="hover:outline-primary hover:border-primary border-outline
  bg-background
  outline-outline focus:outline-primary
  appearance-none
  border-solid
  px-1.5
  py-0.5 outline
  outline-1 focus:border-current focus:ring-current"
  {name}
  {value}
>
  <slot />
</select>
