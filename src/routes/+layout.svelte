<script>
  import AsideLink from '$lib/components/AsideLink.svelte';
  import '../app.css';
</script>

<nav class="bg-surface px-4 py-2">
  <a class="hover:underline" href="/">ui-color-tools</a>
</nav>
<div class="flex h-full flex-row">
  <aside class="flex flex-col gap-2 bg-surface px-4 py-4">
    <AsideLink href="/scheme">Schemes</AsideLink>
    <AsideLink href="/palette">Palettes</AsideLink>
  </aside>
  <main class="w-full bg-background">
    <slot />
  </main>
</div>

<style lang="postcss">
  :global(html) {
  }
</style>
