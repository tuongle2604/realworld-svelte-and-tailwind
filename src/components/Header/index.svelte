<script>
  import BaseLink from "../BaseLink";
  import Container from "@/components/Container";

  let menu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sign in",
      href: "/signin",
    },
    {
      label: "Sign up",
      href: "/signup",
    },
  ];
</script>

<Container class="flex justify-between">
  <BaseLink
    href="/"
    class="text-2xl font-primary text-primary hover:no-underline visited:text-primary"
  >
    Conduit
  </BaseLink>

  <ul class="flex">
    {#each menu as item}
      <li class="">
        <BaseLink
          class="inline-flex p-2 text-default hover:text-primary visited:text-default"
          href={item.href}
        >
          {item.label}
        </BaseLink>
      </li>
    {/each}
  </ul>
</Container>
