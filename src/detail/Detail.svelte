<script lang="ts">
  import { onMount } from "svelte";
  import { httpGet, httpPut } from "../common/api";
  import type { Book } from "../types";
  import BackButtonRow from "../common/BackButtonRow.svelte";
  import BookCover from "../common/BookCover.svelte";
  import Button from "../common/Button.svelte";
  import Header from "../common/Header.svelte";
  export let id;

  let book: Book;
  onMount(async () => {
    const { data } = await httpGet(`/${id}`);
    book = data;
  });

  const handleFavoriteClick = async (): Promise<void> => {
    const toggledBook = { ...book, favorite: !book.favorite };
    const { ok } = await httpPut(`/${book.id}`, toggledBook);
    if (ok) book = toggledBook;
  };
</script>

<style>
  .detail {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40vw, 20rem));
    grid-template-rows: minmax(64vw, 32rem) auto;
    gap: var(--spacingXLarge);
  }
  .cover {
    position: relative;
    display: flex;
    margin-bottom: var(--spacingXLarge);
  }
  .favorite {
    position: absolute;
    width: 90%;
    left: calc(10% + var(--spacingSmall));
    bottom: var(--spacingLarge);
  }
</style>

<BackButtonRow />

<Header element="h1" size="large">Discover</Header>

{#if book}
  <div class="detail">
    <div class="cover">
      <BookCover {book} />
      <div class="favorite">
        <Button on:click={handleFavoriteClick}>
          {book.favorite ? 'Unfavorite' : 'Favorite'}
        </Button>
      </div>
    </div>
    <div>
      <Header>About</Header>
      <p>{book.about}</p>
    </div>
  </div>
{:else}Loading...{/if}
