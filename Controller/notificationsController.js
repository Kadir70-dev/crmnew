const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Initialize environment variables
require('dotenv').config();

// Email setup (Nodemailer)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Twilio setup for SMS
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send email notifications
const sendEmailNotification = async (recipient, subject, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: subject,
    text: message,
  };

  console.log('Preparing to send email...');
  console.log('Email details:', mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', recipient);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Function to send SMS notifications
const sendSMSNotification = async (phoneNumber, message) => {
  console.log('Preparing to send SMS...');
  console.log('SMS details:', {
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phoneNumber,
  });

  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    // console.log('SMS sent successfully to:', phoneNumber);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

// Example API endpoint to trigger notifications
const sendReminder = async (req, res) => {
  const { email, phoneNumber, reminderMessage } = req.body;

  console.log('Received request to send reminder.');
  console.log('Request body:', { email, phoneNumber, reminderMessage });

  try {
    // Send email notification
    console.log('Sending email notification...');
    await sendEmailNotification(email, 'Task Reminder', reminderMessage);

    // Send SMS notification
    // console.log('Sending SMS notification...');
    
    await sendSMSNotification(phoneNumber, reminderMessage);

    console.log('All notifications sent successfully.');
    res.status(200).json({ message: 'Notifications sent successfully!' });
  } catch (error) {
    console.error('Failed to send notifications:', error);
    res.status(500).json({ error: 'Failed to send notifications.' });
  }
};

module.exports = {
  sendReminder,
};
