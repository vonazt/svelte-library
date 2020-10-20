<script>
  import { Route, Router } from "svelte-routing";
  import Library from "./library/Library.svelte";
  import Detail from "./detail/Detail.svelte";
  import Create from "./create/Create.svelte";

  export let url;
</script>

<style>
  main {
    padding: var(--spacingLarge);
  }
</style>

<Router {url}>
  <main>
    <Route path={`create`}>
      <Create />
    </Route>
    <Route path={`/books/:id`} let:params>
      <Detail id={params.id} />
    </Route>
    <Route path={`/`}>
      <Library />
    </Route>
  </main>
</Router>
