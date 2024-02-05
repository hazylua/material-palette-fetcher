<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends HTMLInputAttributes {}
</script>

<input class={clsx('px-1.5 py-0.5 bg-neutral-700 rounded')} {...$$restProps} />
