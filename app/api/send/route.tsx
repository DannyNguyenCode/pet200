import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

export async function POST(req:any) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    let request = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [request.email],
      subject: 'Pet200 Passcode Authentication',
      react: EmailTemplate({ email: request.email, passcode: request.passcode }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
