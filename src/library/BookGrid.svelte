<script lang="typescript">
  import type { Book } from "../types";
  import BookCover from "../common/BookCover.svelte";
  import Heart from "./Heart.svelte";

  export let books: Book[] = [];
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    grid-auto-rows: 12.8rem;
    gap: var(--spacingMedium);
    list-style: none;
    max-width: 100%;
    padding: 0;
  }
  .heart {
    position: absolute;
    bottom: calc(-1 * var(--spacingSmall));
    right: calc(-1 * var(--spacingSmall));
  }
</style>

<ul>
  {#each books as book}
    <BookCover {book} interactive />
    {#if book.favorite}
      <div class="heart">
        <Heart />
      </div>
    {/if}
  {/each}
</ul>
