<script lang="ts">
  import { page } from '$app/stores';
  import clsx from 'clsx';
  export let path: string;
  export let children: any[] = [];
  export let name: string = '';
  export let indent: number = 0;
</script>

{#if children.length > 0}
  <input type="checkbox" class={`hidden peer-checked:${path}`} id={path} />
  <label for={path}>{name}</label>
{/if}
{#if children.length === 0}
  <a
    class={clsx(
      'hover:underline',
      $page.url.pathname.includes(path) && 'font-semibold text-primary'
    )}
    href={path}>{name}</a
  >
{/if}

{#each children as child}
  <div class="flex flex-col gap-2 bg-surface">
    <svelte:self {...child} indent={indent + 24} />
  </div>
{/each}

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
