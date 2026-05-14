import LoginForm from "@components/LoginForm";

export default function LoginPage({
  params,
}: {
  params: { message?: string[] };
}) {
  return <LoginForm message={params.message} />;
}
