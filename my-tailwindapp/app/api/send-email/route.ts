// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import Resend from 'resend'; // Import directly (assuming default export)

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY in environment variables');
}

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  // Validate input data
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    // Directly use the Resend function to send the email
    await Resend.sendEmail({
      from: email,
      to: 'ibaduddinsiddiqui418@gmail.com',
      subject: subject,
      html: `<p>You have a new contact request.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.', details: error.message }, { status: 500 });
  }
}
