const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, htmlOrText) {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || ''}" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlOrText, // use HTML content
    });
    console.log('Email sent:', info.messageId);
    return true;
  } catch (err) {
    console.error('Error sending email:', err);
    return false;
  }
}

module.exports = sendEmail;
