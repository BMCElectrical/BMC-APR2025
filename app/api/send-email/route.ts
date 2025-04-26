// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, mobile, company, suburb, message } = await request.json();

    // Validate required fields
    if (!name || !email || !mobile || !suburb || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled out' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send the email
    await resend.emails.send({
      from: 'BMC Electrical <noreply@bmcelectricalcontractors.com.au>',
      to: 'admin@bmcelectricalcontractors.com.au',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Suburb:</strong> ${suburb}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Send Email Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
