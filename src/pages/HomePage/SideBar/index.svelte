<script>
  import Tag from "@/components/Tag";
  export let tags = [];
</script>

<div class="bg-gray-100 p-3 rounded">
  <p class="mb-2">Popular Tags</p>
  <div>
    {#each tags as tag}
      <Tag on:click={() => console.log(123)}>{tag}</Tag>
    {/each}
  </div>
</div>
