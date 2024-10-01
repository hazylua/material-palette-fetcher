<script lang="ts">
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import FormButton from '$lib/components/FormButton.svelte';
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import { VariantNameMap } from '$lib/utils/@material/material-color-utilities';
  import { hexColorRegex } from '$lib/utils/regex';
  import type { PageData } from './$types';

  export let data: PageData;

  function changeColorPickerValue(e: KeyboardEvent) {
    if (e.shiftKey === true && e.key === 'Enter' && e.target != null) {
      e.preventDefault();
      const value = (e.target as HTMLInputElement).value;
      if (hexColorRegex.test(value)) {
        colorPickerValue = value;
      }
    }
  }

  function changeColorInputValue(e: Event) {
    if (true) {
      const value = (e.target as HTMLInputElement).value;
      colorPickerValue = value;
    }
  }

  export const variantNames = Object.entries(VariantNameMap);

  export let colorPickerValue = data.color ?? '#FFFFFF';
</script>

<div class="flex flex-col gap-4">
  <section>
    <div class="w-fit mb-4 rounded bg-surfaceContainerHigh p-2 text-onSurface">
      <p>Generate a scheme from a color.</p>
    </div>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col items-start gap-1">
          <label for="theme">Root Color</label>
          <div class="flex flex-row gap-2">
            <div>
              <ColorPicker
                id="color"
                name="color"
                className="h-8 w-8"
                value={colorPickerValue ?? data.color}
                on:change={changeColorInputValue}
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

        <div class="flex w-2/12 flex-col gap-1">
          <label for="theme">Scheme Theme</label>
          <FormSelect name="theme" value={data.theme ?? ''}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </FormSelect>
        </div>

        <div class="flex w-2/12 flex-col gap-1">
          <label for="theme">Scheme Variant</label>
          <FormSelect name="variant" value={data.variant ?? ''}>
            {#each variantNames as option}
              <option value={option[0]}>{option[1]}</option>
            {/each}
          </FormSelect>
        </div>
      </div>
      <div>
        <FormButton type="submit">Generate</FormButton>
      </div>
    </form>
  </section>

  <section class="flex w-full flex-grow overflow-hidden">
    <div class=" w-full">
      {#if data.scheme}
        <div class="flex h-full w-full gap-2">
          <ul class="h-full w-1/2 list-none rounded bg-surfaceContainer px-3 py-2">
            {#each data.scheme as entry}
              <li class="h-20">
                <div
                  class=" flex h-full w-full items-center justify-center"
                  style={`background-color: ${entry[1]};`}
                >
                  <span class="border border-primary bg-onPrimary px-2 py-1 text-primary">
                    {entry[0]}</span
                  >
                </div>
              </li>
            {/each}
          </ul>
          <div class="w-1/2 rounded bg-surfaceContainer px-3 py-2">
            <p class="mb-2 text-onSurface">Click on the text below to select all of it.</p>
            <pre
              class="select-all text-sm selection:bg-primary selection:text-onPrimary hover:text-primary">{data.json}</pre>
          </div>
        </div>
      {/if}
      {#if data.err}
        <span class="hover:text-red-300">{data.err}</span>
      {/if}
    </div>
  </section>
</div>
