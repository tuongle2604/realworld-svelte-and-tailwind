<script>
  import AuthLayout from "@/layout/Auth";
  import BaseInput from "@/components/BaseInput";
  import BaseLink from "@/components/BaseLink";
  import BaseButton from "@/components/BaseButton";

  let fields = [
    {
      label: "username",
      placeholder: "Username",
    },
    {
      label: "email",
      placeholder: "Email",
    },
    {
      label: "password",
      placeholder: "Password",
    },
  ];
</script>

<AuthLayout>
  <form>
    <h1 class="text-4xl mb-3">Sign Up</h1>
    <BaseLink href="/login" class="mb-4">Have an account?</BaseLink>
    {#each fields as field}
      <BaseInput {...field} class="mb-4" />
    {/each}
    <BaseButton class="ml-auto block text-xl">Sign up</BaseButton>
  </form>
</AuthLayout>
