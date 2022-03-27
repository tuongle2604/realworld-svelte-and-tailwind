<script>
  let className;
  export { className as class };
  $: containerClass = "xl:container mx-auto p-4 " + className;
</script>

<div class={containerClass}>
  <slot />
</div>
