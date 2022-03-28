<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  // export let onClick = () => null;
</script>

<span
  class="inline-flex px-3 py-1 bg-gray-400 hover:bg-gray-500 text-white rounded-full text-sm cursor-pointer mr-1 mb-1"
  on:click={() => dispatch("click")}
>
  <slot />
</span>
