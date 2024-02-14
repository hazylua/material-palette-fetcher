<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import type { PageData } from './$types';
  import clsx from 'clsx';
  import FormRadio from '$lib/components/FormRadio.svelte';
  import FormButton from '$lib/components/FormButton.svelte';

  export let data: PageData;
</script>

<div class="flex h-full flex-col gap-4 p-4">
  <section>
    <div class="mb-4 rounded bg-surface px-2 py-1 text-onSurface">
      <p>Generate a scheme from a color.</p>
    </div>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col items-start gap-1">
          <label for="theme">Root Color</label>
          <div class="flex flex-row gap-2">
            <div><ColorPicker name="color" class="h-10 w-10" value={data.color ?? ''} /></div>
            <div><FormInput name="color" placeholder="#FFFFFF" value={data.color ?? ''} /></div>
          </div>
        </div>

        <div class="flex w-2/12 flex-col gap-1">
          <label for="theme">Scheme Theme</label>
          <FormSelect name="theme" value={data.theme ?? ''}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </FormSelect>
        </div>

        <div class="w-4/12">
          <div class="mb-1">Scheme Type</div>
          <div
            class="flex w-fit flex-col justify-between rounded border border-primary bg-surfaceVariant text-onSurfaceVariant"
          >
            <div class="flex flex-row items-center gap-3 border-b border-outline px-2 py-1">
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
              <div class="flex flex-row items-center gap-3 border-b border-outline px-2 py-1">
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
            <div class="flex flex-row items-center gap-3 border-outline px-2 py-1">
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
  <section class="flex w-full flex-grow overflow-hidden">
    <div class="relative w-full">
      {#if data.scheme}
        <div class="absolute left-0 top-0 flex h-full w-full gap-2">
          <ul class="h-full w-1/2 list-none overflow-y-scroll rounded">
            {#each data.scheme as entry}
              <li class="h-20">
                <div
                  class="relative flex h-full w-full items-center justify-center"
                  style={`background-color: ${entry[1]};`}
                >
                  <span class="border border-primary bg-onPrimary px-2 py-1 text-primary">
                    {entry[0]}</span
                  >
                </div>
              </li>
            {/each}
          </ul>
          <div class="h-full w-1/2 overflow-y-scroll">
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
