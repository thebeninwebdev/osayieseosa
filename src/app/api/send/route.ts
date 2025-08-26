import { EmailTemplate } from '@/app/[locale]/components/emails/email-template';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'mrEseosa <hello@mreseosa.com>',
      to: ['hello@mreseosa.com'],
      subject: 'New Contact Form Submission',
      react: React.createElement(EmailTemplate, { name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}