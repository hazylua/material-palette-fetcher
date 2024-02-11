<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex h-full flex-col gap-4 p-4">
  <section>
    <div class="mb-4 rounded bg-surface px-2 py-1 text-onSurface">
      <p>Generate a scheme from a color.</p>
    </div>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex flex-row items-end gap-2">
          <!-- <FormInput name="color" type="color" value={data.color ?? ''} />
          <div class="flex flex-col gap-1">
            <FormInput
              label="Color Hexcode"
              name="color"
              placeholder="#FFFFFF"
              value={data.color ?? ''}
            />
          </div> -->
          <ColorPicker name="color" class="h-10 w-10" value={data.color ?? ''} />
        </div>

        <div class="flex w-2/12 flex-col gap-1">
          <FormSelect label="Scheme Theme" name="theme" value={data.theme ?? ''}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </FormSelect>
        </div>

        <div class="flex w-2/12 flex-col gap-1">
          <FormSelect label="Scheme Type" name="type" value={data.type ?? ''}>
            <option value="default">Default</option>
            <option value="content">Content</option>
            <option value="from-core-palette">From color's core palette</option>
          </FormSelect>
        </div>
      </div>
      <div>
        <FormInput type="submit" value="Generate" />
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
          <div class="h-full w-1/2 overflow-y-scroll"><pre>{data.json}</pre></div>
        </div>
      {/if}
      {#if data.err}
        <span class="hover:text-red-300">{data.err}</span>
      {/if}
    </div>
  </section>
</div>
