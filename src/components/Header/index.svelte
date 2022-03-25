
<script>
  import BaseLink from "../commons/BaseLink";
  let menu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sign in",
      href: "/signin"
    },
    {
      label: "Sign up",
      href: "/signup"
    }
  ];
</script>

<header class="xl:container mx-auto p-4 flex justify-between">
  <BaseLink href="/" className="text-2xl font-primary tet-pxrimary visited:text-primary hover:no-underline">
    Conduit
  </BaseLink>

  <ul class="flex">
    {#each menu as item}
		<li>
      <BaseLink className="inline-flex p-2 tet-pxrimary visited:text-primary hover:text-primary" href={item.href}>
        {item.label}
      </BaseLink>
    </li>
	{/each}
  </ul>
</header>

<style>

</style>