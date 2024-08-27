const express = require('express');
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../Controller/calendarController');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    CalendarEvent:
 *      type: object
 *      required:
 *        - title
 *        - startTime
 *        - endTime
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the event
 *          example: Team Meeting
 *        description:
 *          type: string
 *          description: The description of the event
 *        startTime:
 *          type: string
 *          format: date-time
 *          description: The start time of the event
 *          example: 2024-09-01T09:00:00Z
 *        endTime:
 *          type: string
 *          format: date-time
 *          description: The end time of the event
 *          example: 2024-09-01T10:00:00Z
 *        location:
 *          type: string
 *          description: The location of the event
 *        attendees:
 *          type: array
 *          items:
 *            type: string
 *            description: List of attendees' emails or user IDs
 *        reminder:
 *          type: string
 *          format: date-time
 *          description: Reminder time for the event
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date when the event was created
 */

/**
 * @swagger
 * /api/calendar:
 *   post:
 *     summary: Create a new calendar event
 *     tags: [Calendar Integration]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalendarEvent'
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createEvent);

/**
 * @swagger
 * /api/calendar:
 *   get:
 *     summary: Get all calendar events
 *     tags: [Calendar Integration]
 *     responses:
 *       200:
 *         description: Successfully fetched all events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CalendarEvent'
 *       500:
 *         description: Server error
 */
router.get('/', getEvents);

/**
 * @swagger
 * /api/calendar/{id}:
 *   get:
 *     summary: Get a calendar event by ID
 *     tags: [Calendar Integration]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The event ID
 *     responses:
 *       200:
 *         description: Successfully fetched the event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarEvent'
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getEventById);

/**
 * @swagger
 * /api/calendar/{id}:
 *   put:
 *     summary: Update a calendar event by ID
 *     tags: [Calendar Integration]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CalendarEvent'
 *     responses:
 *       200:
 *         description: Event updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CalendarEvent'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateEvent);

/**
 * @swagger
 * /api/calendar/{id}:
 *   delete:
 *     summary: Delete a calendar event by ID
 *     tags: [Calendar Integration]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The event ID
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteEvent);

module.exports = router;
