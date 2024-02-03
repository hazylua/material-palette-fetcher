<script>
  import AsideLink from '$lib/components/AsideLink.svelte';
  import '../app.css';
</script>

<nav class="px-4 py-2 border-b-2 bg-neutral-900 border-neutral-600">
  <a class="px-2 py-0.5 font-bold text-white bg-black hover:underline" href="/">dzntools</a>
</nav>
<div class="flex flex-row h-full">
  <aside class="flex flex-col w-2/12 gap-2 px-4 py-4 border-r-2 border-neutral-600 bg-neutral-900">
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
