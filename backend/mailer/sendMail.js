const nodemailer = require('nodemailer');

async function sendWelcomeEmail(email, name) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || '"The Resistance Lab" <noreply@theresistancelab.com>',
    to: email,
    subject: 'Welcome to The Resistance Lab',
    html: `
      <p>Welcome${name ? ', ' + name : ''}.</p>
      <p>You have joined The Resistance Lab. Stay informed, stay organized.</p>
      <p><em>Novum Mundum Vetere Pasce</em></p>
    `,
  });
}

module.exports = sendWelcomeEmail;
