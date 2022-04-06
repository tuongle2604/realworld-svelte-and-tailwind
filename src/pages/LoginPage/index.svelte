<script>
  import AuthLayout from "@/layout/Auth";
  import BaseInput from "@/components/BaseInput";
  import BaseLink from "@/components/BaseLink";
  import BaseButton from "@/components/BaseButton";
  import Form from "@/components/Form";

  let fields = [
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
  <Form>
    <h1 class="text-4xl mb-3">Sign In</h1>
    <BaseLink href="/register" class="mb-4">Need an account?</BaseLink>
    {#each fields as field}
      <BaseInput {...field} class="mb-4" />
    {/each}
    <BaseButton class="ml-auto block text-xl" type="submit">Sign in</BaseButton>
  </Form>
</AuthLayout>
