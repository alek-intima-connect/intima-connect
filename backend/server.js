const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendWelcomeEmail = require('./mailer/sendMail');

dotenv.config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON body parsing

// Basic endpoint to test server
app.get('/', (req, res) => {
  res.send('Intima Connect backend is running.');
});

// POST route to send welcome email
app.post('/api/contact', async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    await sendWelcomeEmail(email, name);
    res.status(200).json({ message: 'Welcome email sent successfully.' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Intima Connect backend is running on port ${PORT}`);
});
