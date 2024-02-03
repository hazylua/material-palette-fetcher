<script lang="ts">
  import { page } from '$app/stores';
  import clsx from 'clsx';
  export let href: string;
</script>

<a class={clsx('hover:underline', $page.url.pathname.includes(href) && 'text-purple-500')} {href}
  ><slot /></a
>
