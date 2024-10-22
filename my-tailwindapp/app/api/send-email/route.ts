// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_6UyBsF1b_8mtYcXcCxW3T5Wra9z3cc8SG');


export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  // Validate input data
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    // Directly use the Resend function to send the email
    await resend.email.send({
      from: email,
      to: 'ibaduddinsiddiqui418@gmail.com',
      subject: subject,
      html: `<p>You have a new contact request.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (err : unknown) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Failed to send email.', details: err.message }, { status: 500 });
  }
}
