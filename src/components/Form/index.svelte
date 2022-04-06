<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleSubmit(params) {
    console.log(params);
    dispatch("submit");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <slot />
</form>
