<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex flex-col h-full gap-4 p-4">
  <section>
    <p class="mb-4">Generate a scheme from one color.</p>
    <form class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-1">
          <label for="color">Color hexcode</label>
          <input
            class="px-1.5 py-0.5 border-solid bg-neutral-700 outline-0 focus:outline focus:outline-2 focus:outline-indigo-500 rounded"
            placeholder="#"
            name="color"
            value={data.color ?? ''}
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="theme">Scheme type</label>
          <select
            class="px-1.5 py-0.5 border-solid bg-neutral-700 outline-0 focus:outline focus:outline-2 focus:outline-indigo-500 rounded"
            name="theme"
            value={data.theme ?? ''}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <div class="flex flex-col gap-1">
          <label for="color">Color hexcode</label>
          <input type="checkbox" name="partitioned" class="bg-neutral-700" />
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
        <ul class="absolute top-0 left-0 flex flex-col w-full h-full overflow-y-scroll list-none">
          {#each data.scheme as entry}
            <li
              class="flex justify-center w-full p-4 group"
              style={`background-color: ${entry[1]};`}
            >
              <span
                class="invisible px-2 py-1 font-mono align-middle bg-black border border-white group-hover:visible"
                >{entry[0]}</span
              >
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
