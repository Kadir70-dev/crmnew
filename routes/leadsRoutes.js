const express = require('express');
const {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
} = require('../Controller/leadController');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Lead:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - phoneNumber
 *        - source
 *      properties:
 *        name:
 *          type: string
 *          description: The lead's full name
 *          example: Jane Smith
 *        email:
 *          type: string
 *          description: The lead's email address
 *          example: janesmith@example.com
 *        phoneNumber:
 *          type: string
 *          description: The lead's phone number
 *          example: "+1-555-123-4567"
 *        source:
 *          type: string
 *          description: The source from where the lead was acquired
 *          example: Website
 *        status:
 *          type: string
 *          description: The lead's current status
 *          enum:
 *            - New
 *            - Contacted
 *            - Qualified
 *            - Converted
 *            - Dropped
 *          example: New
 *        conversionDate:
 *          type: string
 *          format: date-time
 *          description: The date when the lead was converted (if applicable)
 *        notes:
 *          type: string
 *          description: Additional notes about the lead
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date when the lead was created
 *        communicationHistory:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              date:
 *                type: string
 *                format: date-time
 *                description: The date of communication
 *              message:
 *                type: string
 *                description: The communication message
 *              type:
 *                type: string
 *                enum:
 *                  - Call
 *                  - Email
 *                  - SMS
 *                  - Meeting
 *                description: The type of communication
 */

/**
 * @swagger
 * /api/leads/add:
 *   post:
 *     summary: Create a new lead
 *     tags: [Lead Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       201:
 *         description: Lead created successfully
 *       400:
 *         description: Bad request
 */
router.post('/add', createLead);

/**
 * @swagger
 * /api/leads:
 *   get:
 *     summary: Get all leads
 *     tags: [Lead Management]
 *     responses:
 *       200:
 *         description: Successfully fetched all leads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lead'
 *       500:
 *         description: Server error
 */
router.get('/', getLeads);

/**
 * @swagger
 * /api/leads/{id}:
 *   get:
 *     summary: Get a lead by ID
 *     tags: [Lead Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The lead ID
 *     responses:
 *       200:
 *         description: Successfully fetched the lead
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *       404:
 *         description: Lead not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getLeadById);

/**
 * @swagger
 * /api/leads/{id}:
 *   put:
 *     summary: Update a lead by ID
 *     tags: [Lead Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The lead ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       200:
 *         description: Lead updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Lead not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateLead);

/**
 * @swagger
 * /api/leads/{id}:
 *   delete:
 *     summary: Delete a lead by ID
 *     tags: [Lead Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The lead ID
 *     responses:
 *       200:
 *         description: Lead deleted successfully
 *       404:
 *         description: Lead not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteLead);

module.exports = router;
