// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Get your API key from the environment variable
const apiKey = process.env.RESEND_API_KEY;

// Ensure the API key exists
if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY in environment variables');
}

// Create an instance of Resend
const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the input data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Use the Resend API to send the email
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
  to: ['ibaduddinsiddiqui418@gmail.com'], // Replace with your recipient's email
      subject: subject,
      html: `
        <p>You have a new contact request from:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    // Log and return error
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email.', details: error.message }, { status: 500 });
  }
}
