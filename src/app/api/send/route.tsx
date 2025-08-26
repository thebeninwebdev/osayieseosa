import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const html = `
      <div style="font-family: Helvetica, Arial, sans-serif; line-height:1.6; color:#333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p style="font-size:12px; color:#777;">&copy; ${new Date().getFullYear()} SBP Hotel</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'mrEseosa <hello@mreseosa.com>',
      to: ['hello@mreseosa.com'],
      subject: 'New Contact Form Submission',
      html, // ✅ plain HTML string instead of react
    })

    if (error) {
      console.error('Error sending email:', error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    console.error('Error in POST /api/send:', error)
    return Response.json({ error }, { status: 500 })
  }
}
