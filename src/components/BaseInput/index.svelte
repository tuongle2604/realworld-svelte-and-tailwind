<script>
  import { validateInput } from "./validate";
  let errors = {};
  let className;
  $: displayError = Object.values(errors)?.[0];
  export { className as class };
  export let placeholder = "";
  export let validate = {};

  const inputClass =
    "px-6 py-3 w-full text-lg rounded-md outline-none focus:border-sky-600";
  // className = inputClass + " " + className;

  function onKeyUp(event) {
    errors = validateInput(event.target.value, validate);
  }
</script>

<div class={className}>
  <input class={inputClass} type="text" {placeholder} on:keyup={onKeyUp} />
  {#if displayError}
    <p class="text-left pt-2 pb-1  text-red-500">{displayError}</p>
  {/if}
</div>
