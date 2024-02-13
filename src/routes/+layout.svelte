<script lang="ts">
  import AsideLink from '$lib/components/AsideLink.svelte';
  import '../app.css';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
</script>

<nav class="bg-surface px-4 py-2">
  <a class="hover:underline" href="/">ui-color-tools</a>
</nav>
<div class="flex h-full flex-row">
  <aside class="flex flex-col gap-2 bg-surface py-4 pl-4 pr-10">
    {#each data.routes as route}
      <AsideLink path={route.path} children={route.children} name={route.name}></AsideLink>
    {/each}
  </aside>
  <main class="w-full bg-background">
    <slot />
  </main>
</div>

<style lang="postcss">
  :global(html) {
  }
</style>
