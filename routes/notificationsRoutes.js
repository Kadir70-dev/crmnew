const express = require('express');
const { sendReminder } = require('../Controller/notificationsController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ReminderRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The email address to send the reminder to.
 *         phoneNumber:
 *           type: string
 *           description: The phone number to send the SMS reminder to.
 *         reminderMessage:
 *           type: string
 *           description: The message to be sent in the reminder.
 *       required:
 *         - reminderMessage
 *       example:
 *         email: john.doe@example.com
 *         phoneNumber: "+1-555-123-4567"
 *         reminderMessage: "Don't forget about the meeting tomorrow at 10 AM."
 *     ReminderResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Status of the notification process.
 *       example:
 *         message: "Notifications sent successfully!"
 */

/**
 * @swagger
 * /api/sendreminder:
 *   post:
 *     summary: Send a reminder via email and SMS
 *     description: This endpoint sends a reminder message via email and SMS.
 *     requestBody:
 *       description: Details for sending the reminder
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReminderRequest'
 *     responses:
 *       200:
 *         description: Notifications sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReminderResponse'
 *       500:
 *         description: Failed to send notifications
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReminderResponse'
 */
router.post('/', sendReminder);

module.exports = router;
