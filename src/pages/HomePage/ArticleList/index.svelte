<script>
  import ArticleCard from "@/components/ArticleCard";
  export let articles = [];
</script>

<div>
  {#each articles as article}
    <ArticleCard {article} />
  {/each}
</div>
