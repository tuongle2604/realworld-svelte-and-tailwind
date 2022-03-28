<script>
  export let tabs = ["Global feed", "My feed"];
  import BaseLink from "@/components/BaseLink";
</script>

<ul class="flex border-b">
  {#each tabs as tab}
    <li class="hover:text-primary hover:border-b-2 hover:border-primary">
      <BaseLink class="inline-flex p-3 hover:no-underline">{tab}</BaseLink>
    </li>
  {/each}
</ul>
