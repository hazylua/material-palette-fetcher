<script lang="ts">
  import { routes } from '$lib/client/routes';
  import AsideMenu from '$lib/components/Aside/AsideMenu.svelte';
  import Navbar from '$lib/components/Nav/Navbar.svelte';
  import '../app.css';

  import { onMount, setContext } from 'svelte';

  onMount(() => {
    const themeSwitcher = document.getElementById('theme-switcher') as HTMLInputElement;
    let theme = 'light';
    if (themeSwitcher) {
      if (!localStorage.getItem('theme')) {
        themeSwitcher.checked = true;
        theme = 'light';
      }

      themeSwitcher.addEventListener('change', () => {
        theme = themeSwitcher.checked ? 'light' : 'dark';
      });
    }
    localStorage.setItem('theme', theme);
    setContext('theme', theme);
  });
</script>

<div>
  <input
    id="theme-switcher"
    name="theme-switcher"
    class="hidden peer/theme-switcher"
    type="checkbox"
  />
  <div class="dark peer-checked/theme-switcher:light">
    <Navbar
      classes="fixed top-0 left-0 grid w-full h-14 grid-cols-3 px-4 py-2 bg-surfaceContainerHighest text-onSurface"
    />
    <AsideMenu
      classes="fixed left-0 flex w-40 h-full overflow-y-auto top-14 max-w-40 bg-primary"
      {routes}
    />
    <main class="w-full h-screen pl-40 bg-background pt-14 text-onBackground">
      <slot />
    </main>
  </div>
</div>
