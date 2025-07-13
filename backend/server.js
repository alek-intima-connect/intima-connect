const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendWelcomeEmail = require('./mailer/sendMail');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    await sendWelcomeEmail(email, name);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
