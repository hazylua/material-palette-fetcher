<script lang="ts">
  import { page } from '$app/stores';
  import clsx from 'clsx';
  export let href: string;
</script>

<a class={clsx('mr-10 hover:underline', $page.url.pathname.includes(href) && 'text-primary font-semibold')} {href}
  ><slot /></a
>
