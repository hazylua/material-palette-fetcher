<script lang="ts">
  import type { TRoute } from '$lib/client/routes';
  import AsideLink from './AsideLink.svelte';

  export let routes: TRoute[];

  export let classes: string = '';
</script>

<aside
  class={classes}
>
  <div
    class="flex flex-col w-40 overflow-y-auto max-w-40 bg-surfaceContainerHigh text-onSurface"
  >
    {#each routes as route}
      <AsideLink path={route.path} type={route.type} children={route.children} name={route.name} />
    {/each}
  </div>
</aside>
