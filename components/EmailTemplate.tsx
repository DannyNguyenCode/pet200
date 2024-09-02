import * as React from 'react';

interface EmailTemplateProps {
    email:string;
    passcode: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,passcode
}) => (
  <div>
    <h1>Welcome, {email}!</h1>
    <p>Below is your passcode, please enter it on the verification page:</p>
    <h2>{passcode}</h2>
  </div>
);
