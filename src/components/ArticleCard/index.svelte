<script>
  import BaseImage from "@/components/BaseImage";
  import BaseLink from "@/components/BaseLink";
  import Tag from "@/components/Tag";
  export let article = {};
</script>

<div class="py-6">
  <div class="flex items-center mb-4">
    <BaseImage
      src="https://api.realworld.io/images/demo-avatar.png"
      class="aspect-square basis-8 rounded-full overflow-hidden"
      alt="avatar"
      width="32"
      height="32"
    />
    <div class="pl-2 pr-4">
      <BaseLink class="text-primary visited:text-primary">
        {article.author?.username}
      </BaseLink>
      <p class="text-secondary text-sm">{article.createdAt}</p>
    </div>
  </div>
  <p class="text-2xl font-bold">{article.title}</p>
  <p class="text-secondary mb-4">{article.description}</p>
  <div class="flex items-baseline">
    <BaseLink
      class="text-secondary visited:text-secondary text-sm mr-auto basis-[80px] shrink-0"
    >
      Read more...
    </BaseLink>

    <div class="flex flex-wrap">
      {#each article.tagList as tag}
        <Tag>{tag}</Tag>
      {/each}
    </div>
  </div>
</div>
