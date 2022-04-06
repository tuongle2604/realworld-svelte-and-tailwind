<script>
  import { Link, link, Router } from "svelte-routing";
  let className;
  export let href = "#";
  export { className as class };
  className = "inline-flex text-primary" + " " + className;
</script>

<Router>
  <Link to={href} class={className}>
    <slot />
  </Link>
</Router>
