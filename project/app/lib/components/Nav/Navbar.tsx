<script>
  import { MenuIcon } from 'lucide-svelte';
  import ThemeSwitcher from '../ThemeSwitcher.svelte';

  export let classes = '';
</script>

<nav class={classes}>
  <div class="flex justify-start gap-2">
    <button class="p-2 bg-black cursor-pointer group hover:bg-primaryContainer"
      ><MenuIcon class="stroke-white group-hover:stroke-onPrimaryContainer" /></button
    >
    <a
      class=" h-fit bg-black px-1 py-1.5 font-mono text-xl text-white transition-all hover:ring-1 hover:ring-primary"
      href="/"
    >
      ://ui.utils
    </a>
  </div>
  <div></div>
  <div class="flex justify-end w-full">
    <ThemeSwitcher />
  </div>
</nav>
