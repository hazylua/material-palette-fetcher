<script lang="ts">
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex h-full flex-col gap-4 p-4">
  <section>
    <p class="mb-4">Generate palettes.</p>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex w-2/12 flex-col gap-1">
          <FormInput
            label="Color Hexcode"
            name="color"
            placeholder="#FFFFFF"
            value={data.color ?? ''}
          />
        </div>

        <div class="flex w-2/12 flex-col gap-1">
          <FormSelect label="Palette Type" name="type" value={data.type ?? ''}>
            <option value="core">Core</option>
            <option value="tonal">Tonal</option>
          </FormSelect>
        </div>
      </div>
      <div class="flex flex-row gap-2">
        <FormInput type="submit" value="Generate" />
      </div>
    </form>
  </section>
  <section>
    {#if data.color && data.palette}
      <div
        class="h-10 w-full border-2 border-solid px-2 py-1.5"
        style={`background-color: ${data.color}; border-color: ${data.palette[0][1]}; color: ${data.palette[0][1]}`}
      ></div>
    {/if}
  </section>
  <section class="flex w-full flex-grow overflow-hidden">
    <div class="relative w-full">
      {#if data.palette}
        <div class="absolute left-0 top-0 flex h-full w-full gap-2">
          <ul class="h-full w-1/2 list-none overflow-y-scroll rounded">
            {#each data.palette as entry}
              <li class="h-20">
                <div
                  class="relative flex h-full w-full items-center justify-center"
                  style={`background-color: ${entry[1]};`}
                >
                  <span class="border border-white bg-black px-2 py-1 text-white"> {entry[0]}</span>
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
