<script lang="ts">
  export let label: string = ``;
  export let value: string = ``;
  export let multiline: boolean = false;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<style>
  label {
    font-weight: var(--typeWeightBold);
    text-transform: uppercase;
  }
  span {
    padding: 0 0 var(--spacingSmall) var(--spacingLarge);
  }
  input,
  textarea {
    display: block;
    background: #f8ecde;
    border-radius: 25px;
    border: 2px solid var(--colorFg);
    padding: 0.75rem var(--spacingSmall) 0.75rem var(--spacingLarge);
    width: 100%;
  }
  textarea {
    height: 8rem;
  }
</style>

<label>
  <span>{label}</span>
  {#if multiline}
    <textarea bind:value />
  {:else}<input type="text" bind:value />{/if}
</label>
