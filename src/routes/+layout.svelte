<script>
  import AsideLink from '$lib/components/AsideLink.svelte';
  import '../app.css';
</script>

<nav class="border-b-2 border-neutral-600 bg-neutral-900 px-4 py-2">
  <a class="hover:underline" href="/">Design Tools</a>
</nav>
<div class="flex h-full flex-row">
  <aside class="flex flex-col gap-2 border-r-2 border-neutral-600 bg-neutral-900 py-4 px-4">
    <AsideLink href="/scheme">Schemes</AsideLink>
    <AsideLink href="/palette">Palettes</AsideLink>
  </aside>
  <main class="w-full">
    <slot />
  </main>
</div>

<style lang="postcss">
  :global(html) {
    color: theme(colors.neutral.300);
    background-color: theme(colors.neutral.800);
  }
</style>
