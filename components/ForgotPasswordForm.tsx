import Link from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@mui/material";

type ForgotPasswordFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  toastContainer: React.ReactNode;
  isLoading: boolean;
  email: string;
  setEmail: (email: string) => void;
};

export default function ForgotPasswordForm({
  onSubmit,
  toastContainer,
  isLoading,
  email,
  setEmail,
}: ForgotPasswordFormProps) {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background p-4 font-body-md text-on-background md:p-8">
      <div className="w-full max-w-md rounded-lg border-2 border-outline-variant bg-surface-container-low p-6 shadow-lg md:p-8">
        <header className="mb-6 border-b border-outline-variant pb-4">
          <h1 className="font-headline-md text-headline-md text-on-surface">Reset password</h1>
          <p className="mt-2 text-body-md leading-relaxed text-on-surface">
            Enter the email for your account. We will send a passcode if we find a match.
          </p>
        </header>

        <form className="flex flex-col gap-6" onSubmit={onSubmit} noValidate>
          <TextField
            required
            id="forgot-password-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            label="Email"
            variant="outlined"
            color="info"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ "aria-required": true }}
          />

          <LoadingButton
            size="large"
            type="submit"
            loading={isLoading}
            variant="contained"
            fullWidth
            aria-busy={isLoading}
          >
            Send passcode
          </LoadingButton>

          {toastContainer}
        </form>

        <p className="mt-8 text-center text-body-md text-on-surface">
          <Link
            href="/login"
            className="font-semibold text-secondary underline decoration-2 underline-offset-4 outline-offset-4 hover:text-tertiary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
