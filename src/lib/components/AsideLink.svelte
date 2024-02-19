<script lang="ts">
  import { page } from '$app/stores';
  import clsx from 'clsx';
  export let path: string;
  export let children: any[] = [];
  export let name: string = '';
  export let indent: number = 0;
  export const isPath = $page.url.pathname.includes(path);
</script>

{#if children.length > 0}
  <input type="checkbox" class="peer hidden" id={path} checked={isPath} />
  <label
    class={clsx('block cursor-pointer py-1.5 pl-3', isPath && 'font-semibold text-primary')}
    for={path}
  >
    {name}
  </label>

  <div class={clsx('hidden flex-col peer-checked:flex', `bg-surfaceContainer`)}>
    {#each children as child}
      <svelte:self {...child} indent={indent + 1} />
    {/each}
  </div>
{:else}
  <a
    class={clsx(
      'cursor-pointer py-1.5 pl-3 hover:underline',
      isPath && 'font-semibold text-primary'
    )}
    href={path}>{name}</a
  >
{/if}

<style lang="postcss">
  .vis-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
</style>
