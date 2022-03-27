<script>
  // import { link } from "svelte-spa-router";
  import { Link, link, Router } from "svelte-routing";
  let className;
  export let href = "#";
  export { className as class };
  // export let activeClass = "";

  // function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
  //   const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

  //   // The object returned here is spread on the anchor element's attributes
  //   if (isActive) {
  //     return { class: className + " " + activeClass };
  //   }
  //   return { class: className };
  // }
</script>

<Router>
  <Link to={href} class={className}>
    <slot />
  </Link>
</Router>
<!-- <a {href} getProps={"getProps()"} use:link>
  <slot />
</a> -->
