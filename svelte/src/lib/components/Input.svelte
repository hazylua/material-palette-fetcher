<script lang="ts">
  import clsx from 'clsx';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends HTMLInputAttributes {}
</script>

<input class={clsx('rounded bg-neutral-700 px-1.5 py-0.5')} {...$$restProps} />
