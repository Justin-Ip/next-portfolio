const nodemailer = require("nodemailer");

// https://developers.google.com/oauthplayground/ to generate tokens.
export async function POST(request) {
  const data = await request.json();

  // TODO: Add server sided validation for empty emails.

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
  });

  console.log("Attempting to send email with following data...\n", data);

  const mail = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_SENDTO,
    replyTo: data.email,
    subject: `[${data.name}] ${data.subject}`,
    text: data.message,
  });

  console.log("Successfully sent email: ", mail.messageId);

  return Response.json({ messageId: mail.messageId });
}
