interface EmailTemplateProps {
    email:string;
    passcode: string;
}

export const EmailTemplate = ({
  email,passcode
}: Readonly<EmailTemplateProps>) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <p>Below is your passcode, please enter it on the verification page:</p>
    <h2>{passcode}</h2>
  </div>
);
