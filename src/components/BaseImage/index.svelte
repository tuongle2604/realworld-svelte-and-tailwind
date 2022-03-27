<script>
  export let src = "";
  export let alt = "";
  export let width = "";
  export let height = "";
  let className;
  export { className as class };
</script>

<div class={className}>
  <img {src} {alt} {width} {height} />
</div>
