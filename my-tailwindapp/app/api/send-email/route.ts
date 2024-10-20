// app/api/send-email/route.ts
'use client';
import { NextResponse } from 'next/server';
import Resend from 'resend';


const resend  = new Resend('re_6TKq8Md2_JMXiyBdJkh8oQ2xAj7sDGn7t')  ; // Ensure you have your API key set in your environment variables

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  // Validate input data
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    // Send email using Resend
    await resend.sendEmail({
      from: email, // Your sender email
      to: 'ibaduddinsiddiqui418gmail.com', // You can also send to your own email
      subject: subject,
      html: `<p>You have a new contact request.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
