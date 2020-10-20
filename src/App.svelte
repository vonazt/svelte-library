<script lang="ts">
  import Library from "./library/Library.svelte";
  import Detail from "./detail/Detail.svelte";
  import type { BookSelectEvent } from "./types";

  let page: string = `detail`;
  let pageArgs: {} = { id: 4 };

  const handleBookSelect = ({ detail }: BookSelectEvent): void => {
    page = `detail`;
    pageArgs = detail;
  };
</script>

<style>
</style>

<main>
  {#if page === `detail`}
    <Detail {...pageArgs} />
  {:else}
    <Library on:book-select={handleBookSelect} />
  {/if}
</main>
