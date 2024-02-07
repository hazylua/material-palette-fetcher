<script lang="ts">
  import FormCheckbox from '$lib/components/FormCheckbox.svelte';
  import FormInput from '$lib/components/FormInput.svelte';
  import FormSelect from '$lib/components/FormSelect.svelte';
  import clsx from 'clsx';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex h-full flex-col gap-4 p-4">
  <section>
    <p class="mb-4">Generate a scheme from one color.</p>
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
          <FormSelect label="Theme" name="theme" value={data.theme ?? ''}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </FormSelect>
        </div>

        <!-- <div class="flex flex-col gap-1">
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
        </div> -->
      </div>
      <div>
        <input
          class="rounded bg-neutral-700 px-1.5 py-0.5 hover:bg-neutral-600 focus:outline-indigo-500"
          type="submit"
          value="Generate"
        />
      </div>
    </form>
  </section>
  <section class="flex w-full flex-grow overflow-hidden">
    <div class="relative w-full">
      {#if data.scheme}
        <ul class="absolute left-0 top-0 h-full w-full list-none overflow-y-scroll rounded">
          {#each data.scheme as entry}
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
      {/if}
      {#if data.err}
        <span class="hover:text-red-300">{data.err}</span>
      {/if}
    </div>
  </section>
</div>
