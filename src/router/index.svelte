<script>
  import { Router, Link, Route } from "svelte-routing";
  import HomePage from "../pages/HomePage";
  import ArticlePage from "../pages/ArticlePage";
  import LoginPage from "../pages/LoginPage";
  import RegisterPage from "src/pages/RegisterPage";
  import NotFound from "../pages/NotFound";
</script>

<Router>
  <Route path="/">
    <HomePage />
  </Route>
  <Route path="login">
    <LoginPage />
  </Route>
  <Route path="register">
    <RegisterPage />
  </Route>
  <Route path="article" component={ArticlePage} />
</Router>
