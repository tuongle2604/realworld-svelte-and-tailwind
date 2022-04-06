<script>
  let className;
  export { className as class };
  $: containerClass = "container max-w-6xl mx-auto px-5 py-3 " + className;
</script>

<div class={containerClass}>
  <slot />
</div>
