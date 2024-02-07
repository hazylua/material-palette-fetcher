<script>
  import AsideLink from '$lib/components/AsideLink.svelte';
  import '../app.css';
</script>

<nav class="border-b-2 border-neutral-600 bg-neutral-900 px-4 py-2">
  <a class="px-2 py-0.5 font-semibold hover:underline" href="/">dzntools</a>
</nav>
<div class="flex h-full flex-row">
  <aside class="flex w-2/12 flex-col gap-2 border-r-2 border-neutral-600 bg-neutral-900 px-4 py-4">
    <AsideLink href="/scheme">Schemes</AsideLink>
    <AsideLink href="/palette">Palettes</AsideLink>
  </aside>
  <main class="w-11/12">
    <slot />
  </main>
</div>

<style lang="postcss">
  :global(html) {
    color: theme(colors.neutral.300);
    background-color: theme(colors.neutral.800);
  }
</style>
