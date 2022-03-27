<script>
  import { Router, Link, Route } from "svelte-routing";
  import HomePage from "../pages/HomePage";
  import ArticlePage from "../pages/ArticlePage";
  import SignIn from "../pages/SignIn";
  import NotFound from "../pages/NotFound";
</script>

<Router>
  <Route path="/">
    <HomePage />
  </Route>
  <Route path="/signin">
    <SignIn />
  </Route>
  <Route path="/article" component={ArticlePage} />
</Router>
