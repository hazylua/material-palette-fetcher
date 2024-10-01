<script lang="ts">
  import { MoonIcon, SunIcon } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let theme;
  onMount(() => {
    co
    theme = localStorage.getItem('theme') ?? '';
    console.log(theme);
  });
</script>

<div class="flex items-center justify-end">
  <label
    for="theme-switcher"
    class="p-2 cursor-pointer hover:bg-primaryContainer hover:text-onPrimaryContainer"
  >
    {#if theme === 'light'}
      <SunIcon id="theme-moon" />
    {:else if theme === 'dark'}
      <MoonIcon id="theme-sun" />
    {/if}
  </label>
</div>
<!-- 
{#if theme === 'light'}
  <div class="flex items-center justify-end">
    <label
      for="theme-switcher"
      class="p-2 cursor-pointer hover:bg-primaryContainer hover:text-onPrimaryContainer"
    >
      <SunIcon id="theme-moon" />
    </label>
  </div>
{:else if theme === 'dark'}
  <div class="flex items-center justify-end">
    <label
      for="theme-switcher"
      class="p-2 cursor-pointer hover:bg-primaryContainer hover:text-onPrimaryContainer"
    >
      <MoonIcon id="theme-sun" />
    </label>
  </div>
{:else}
  {null}
{/if} -->
