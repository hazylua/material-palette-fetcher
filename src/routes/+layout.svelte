<script lang="ts">
  import AsideLink from '$lib/components/AsideLink.svelte';
  import '../app.css';
  import type { LayoutServerData } from './$types';

  export let data: LayoutServerData;
</script>

<div class=" flex-row border-4 border-background px-44 pt-12">
  <nav
    class="fixed left-0 top-0 flex h-12 w-full bg-surfaceContainerHighest px-4 py-2 text-onSurface"
  >
    <a
      class="
      rounded-sm bg-black px-2
      py-0.5 font-mono text-lg
      font-light text-white
      transition-all
      hover:ring-1 hover:ring-primary"
      href="/">://ui-color-tools</a
    >
  </nav>
  <aside
    class="
    fixed left-2 top-14
    flex h-full
    w-40 max-w-40
    overflow-y-auto
    "
  >
    <div
      class="
      flex h-full
      w-40 max-w-40 flex-col
      overflow-y-auto rounded-sm
      bg-surfaceContainerHigh text-onSurface"
    >
      {#each data.routes as route}
        <AsideLink
          path={route.path}
          type={route.type}
          children={route.children}
          name={route.name}
        />
      {/each}
    </div>
  </aside>
  <main class="w-full bg-background">
    <slot />
  </main>
</div>

<style lang="postcss">
  :global(html) {
  }
</style>
