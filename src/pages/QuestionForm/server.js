// Backend server code (e.g., server.js)

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/submit-question', async (req, res) => {
  try {
    const { question } = req.body;

    // Configure Nodemailer with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password',
      },
    });

    // Define email options
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'desovajulie@seznam.cz',
      subject: 'Nova otazka z webu',
      text: `Question: ${question}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.status(200).json({ message: 'Question sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
