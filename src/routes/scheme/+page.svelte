<script lang="ts">
  import FormCheckbox from '$lib/components/FormCheckbox.svelte';
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex flex-col h-full gap-4 p-4">
  <section>
    <p class="mb-4">Generate a scheme from one color.</p>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col w-2/12 gap-1">
          <FormInput
            label="Color Hexcode"
            name="color"
            placeholder="#FFFFFF"
            value={data.color ?? ''}
          />
        </div>

        <div class="flex flex-col w-2/12 gap-1">
          <FormSelect label="Theme" name="theme" value={data.theme ?? ''}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </FormSelect>
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex flex-row items-center gap-2">
            <FormCheckbox
              checked={data.split === 'on' ? true : false}
              name="split"
              label="Split Colors"
            />
          </div>

          <div class="flex flex-row gap-2">
            <FormInput name="parts" placeholder="Parts" value={data.parts ?? ''} />
            <FormInput name="step" placeholder="Step" value={data.step ?? ''} />
          </div>
        </div>
      </div>
      <div>
        <input
          class="px-1.5 py-0.5 rounded bg-neutral-700 hover:bg-neutral-600 focus:outline-indigo-500"
          type="submit"
          value="Generate"
        />
      </div>
    </form>
  </section>
  <section class="flex flex-grow w-full overflow-hidden">
    <div class="relative w-1/2">
      {#if data.scheme}
        <ul class="absolute top-0 left-0 w-full h-full overflow-y-scroll list-none">
          {#each data.scheme1 as entry}
            <li class="h-10">
              <div class="relative flex flex-row justify-center w-full h-full group">
                {#each entry.colors as color}
                  <div class="flex-grow h-full" style={`background-color: ${color};`}></div>
                {/each}
                <!-- <span
                  class="absolute top-0 left-0 invisible w-full px-2 py-1 font-mono align-middle bg-black border border-white group-hover:visible"
                  >{entry[0]}</span
                > -->
              </div>
            </li>
          {/each}
        </ul>
      {/if}
      {#if data.err}
        <span class="hover:text-red-300">{data.err}</span>
      {/if}
    </div>
  </section>
</div>
