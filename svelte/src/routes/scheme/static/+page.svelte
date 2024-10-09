<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import type { PageData } from './$types';
  import FormRadio from '$lib/components/FormRadio.svelte';
  import FormButton from '$lib/components/FormButton.svelte';
  import { hexColorRegex } from '$lib/utils/regex';

  export let data: PageData;

  function changeColorPickerValue(e: KeyboardEvent) {
    console.log(e.currentTarget);
    if (e.shiftKey === true && e.key === 'Enter' && e.target != null) {
      const value = (e.target as HTMLInputElement).value;
      if (hexColorRegex.test(value)) {
        colorPickerValue = value;
      }
    }
  }

  export let colorPickerValue = data.color ?? '';
</script>

<div class="flex flex-col h-full gap-4 p-4">
  <section>
    <div class="px-2 py-1 mb-4 rounded bg-surface text-onSurface">
      <p>Generate a scheme from a color.</p>
    </div>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col items-start gap-1">
          <label for="theme">Root Color</label>
          <div class="flex flex-row gap-4">
            <div>
              <ColorPicker
                id="color"
                name="color"
                className="h-8 w-8"
                value={colorPickerValue ?? data.color}
              />
            </div>
            <div class="flex flex-col gap-1">
              <FormInput
                placeholder="#FFFFFF"
                value={colorPickerValue ?? data.color}
                on:keydown={changeColorPickerValue}
              />
              <p class="text-xs font-normal text-onBackground">
                Press <span class="font-mono text-primary">Shift+Enter</span> to update color value.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-2/12 gap-1">
          <label for="theme">Scheme Theme</label>
          <FormSelect name="theme" value={data.theme ?? ''}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </FormSelect>
        </div>

        <div class="w-4/12">
          <div class="mb-1">Scheme Type</div>
          <div
            class="flex flex-col justify-between border rounded w-fit border-primary bg-surfaceVariant text-onSurfaceVariant"
          >
            <div class="flex flex-row items-center gap-3 px-2 py-1 border-b border-outline">
              <FormRadio
                name="type"
                value="default"
                checked={data.type === 'default'}
                className="peer"
              />
              <div class="peer-checked:text-primary">
                <label for="default">Default</label>
                <p class="text-xs font-normal text-onBackground">Default color scheme.</p>
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-row items-center gap-3 px-2 py-1 border-b border-outline">
                <FormRadio
                  name="type"
                  value="content"
                  checked={data.type === 'content'}
                  className="peer"
                />
                <div class="peer-checked:text-primary">
                  <label for="default">Content</label>
                  <p class="text-xs font-normal text-onBackground">Content color scheme.</p>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center gap-3 px-2 py-1 border-outline">
              <FormRadio
                name="type"
                value="from-core-palette"
                checked={data.type === 'from-core-palette'}
                className="peer"
              />
              <div class="peer-checked:text-primary">
                <label for="default">Core Palette</label>
                <p class="text-xs font-normal text-onBackground">
                  Color scheme from the color's core palette.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FormButton type="submit">Generate</FormButton>
      </div>
    </form>
  </section>
  <section class="flex flex-grow w-full overflow-hidden">
    <div class="relative w-full">
      {#if data.scheme}
        <div class="absolute top-0 left-0 flex w-full h-full gap-2">
          <ul class="w-1/2 h-full overflow-y-scroll list-none rounded">
            {#each data.scheme as entry}
              <li class="h-20">
                <div
                  class="relative flex items-center justify-center w-full h-full"
                  style={`background-color: ${entry[1]};`}
                >
                  <span class="px-2 py-1 border border-primary bg-onPrimary text-primary">
                    {entry[0]}</span
                  >
                </div>
              </li>
            {/each}
          </ul>
          <div class="w-1/2 h-full overflow-y-scroll">
            <p>Click on the text below to select all of it.</p>
            <pre class="select-all">{data.json}</pre>
          </div>
        </div>
      {/if}
      {#if data.err}
        <span class="hover:text-red-300">{data.err}</span>
      {/if}
    </div>
  </section>
</div>
