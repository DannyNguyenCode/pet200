import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:any) {
  try {
    console.log("check===========")
    console.log("req",req)
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gbnguyenw@gmail.com'],
      subject: 'Pet200 Passcode Authentication',
      react: EmailTemplate({ email: `${req.email}`,passcode:`${req.passcode}` }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
