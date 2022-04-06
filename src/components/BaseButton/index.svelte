<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let className;
  export let type = "button";
  export { className as class };
  className =
    "px-6 py-3 rounded bg-primary text-white outline-none focus:bg-primary hover:bg-primary-dark border-0" +
    " " +
    className;
</script>

<button class={className} {type} on:click={() => dispatch("click")}>
  <slot />
</button>
