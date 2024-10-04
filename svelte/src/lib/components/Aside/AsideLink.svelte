<script lang="ts">
  import { page } from '$app/stores';
  import { uid } from 'uid';
  import clsx from 'clsx';
  export let path: string;
  export let type: number | null = null;
  export let children: any[] = [];
  export let name: string = '';
  export let indent: number = 0;
  $: isPath = $page.url.pathname.includes(path);
</script>

<div class='flex flex-col'>
{#if type === 2 && children.length > 0}
  <input type="checkbox" class={`hidden peer`} id={path} checked={isPath} />
  <label
    class={clsx(
      'hover:bg- block cursor-pointer py-1.5 pl-3',
      isPath && 'font-semibold text-primary'
    )}
    for={path}
  >
    {name}
  </label>

  <div class={clsx(`hidden flex-col peer-checked:flex`, `bg-surfaceContainer`)}>
    {#each children as child}
      <svelte:self {...child} indent={indent + 1} />
    {/each}
  </div>
{:else if type === 1}
  <a
    class={clsx(
      'cursor-pointer py-2 pl-3 hover:underline',
      isPath && 'font-semibold text-primary'
    )}
    href={path}>{name}</a
  >
{/if}
</div>
