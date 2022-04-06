<script>
  import DefaultLayout from "@/layout/Default";
  import SideBar from "./SideBar";
  import ArticleList from "./ArticleList";
  import FeedToggle from "./FeedToggle";

  const tags = ["welcome", "implementations", "codebaseShow", "introduction"];
  const data = {
    articles: [
      {
        slug: "Create-a-new-implementation-1",
        title: "Create a new implementation",
        description: "join the community by creating a new implementation",
        body: "Share your knowledge and enpower the community by creating a new implementation",
        tagList: ["implementations"],
        createdAt: "2021-11-24T12:11:08.212Z",
        updatedAt: "2021-11-24T12:11:08.212Z",
        favorited: false,
        favoritesCount: 1589,
        author: {
          username: "Gerome",
          bio: null,
          image: "https://api.realworld.io/images/demo-avatar.png",
          following: false,
        },
      },
      {
        slug: "Explore-implementations-1",
        title: "Explore implementations",
        description:
          "discover the implementations created by the RealWorld community",
        body: "Over 100 implementations have been created using various languages, libraries, and frameworks.\n\nExplore them on CodebaseShow.",
        tagList: ["codebaseShow", "implementations"],
        createdAt: "2021-11-24T12:11:07.952Z",
        updatedAt: "2021-11-24T12:11:07.952Z",
        favorited: false,
        favoritesCount: 1029,
        author: {
          username: "Gerome",
          bio: null,
          image: "https://api.realworld.io/images/demo-avatar.png",
          following: false,
        },
      },
      {
        slug: "Welcome-to-RealWorld-project-1",
        title: "Welcome to RealWorld project",
        description:
          "Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more",
        body: "See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spec",
        tagList: ["welcome", "introduction"],
        createdAt: "2021-11-24T12:11:07.557Z",
        updatedAt: "2021-11-24T12:11:07.557Z",
        favorited: false,
        favoritesCount: 688,
        author: {
          username: "Gerome",
          bio: null,
          image: "https://api.realworld.io/images/demo-avatar.png",
          following: false,
        },
      },
    ],
    articlesCount: 3,
  };
</script>

<DefaultLayout>
  <div class="flex">
    <div class="basis-3/4 px-4">
      <FeedToggle />
      <ArticleList articles={data.articles} />
    </div>
    <div class="basis-1/4 px-4">
      <SideBar {tags} />
    </div>
  </div>
</DefaultLayout>
