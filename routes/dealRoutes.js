const express = require('express');
const {
  createDeal,
  getDeals,
  getDealById,
  updateDeal,
  deleteDeal,
} = require('../Controller/dealController');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Deal:
 *      type: object
 *      required:
 *        - title
 *        - clientName
 *        - value
 *      properties:
 *        title:
 *          type: string
 *          description: The deal's title
 *          example: New Website Design
 *        description:
 *          type: string
 *          description: The deal's description
 *        clientName:
 *          type: string
 *          description: The name of the client
 *          example: Acme Corp
 *        value:
 *          type: number
 *          description: The monetary value of the deal
 *          example: 10000
 *        stage:
 *          type: string
 *          description: The current stage of the deal
 *          enum:
 *            - Lead
 *            - Negotiation
 *            - Contract
 *            - Closed-Won
 *            - Closed-Lost
 *          example: Lead
 *        expectedCloseDate:
 *          type: string
 *          format: date-time
 *          description: The expected close date of the deal
 *        actualCloseDate:
 *          type: string
 *          format: date-time
 *          description: The actual close date of the deal
 *        probability:
 *          type: number
 *          description: The probability of closing the deal (0-100%)
 *          example: 75
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date when the deal was created
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
 *                  - Meeting
 *                description: The type of communication
 */

/**
 * @swagger
 * /api/deals:
 *   post:
 *     summary: Create a new deal
 *     tags: [Deals/Opportunities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Deal'
 *     responses:
 *       201:
 *         description: Deal created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createDeal);

/**
 * @swagger
 * /api/deals:
 *   get:
 *     summary: Get all deals
 *     tags: [Deals/Opportunities]
 *     responses:
 *       200:
 *         description: Successfully fetched all deals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Deal'
 *       500:
 *         description: Server error
 */
router.get('/', getDeals);

/**
 * @swagger
 * /api/deals/{id}:
 *   get:
 *     summary: Get a deal by ID
 *     tags: [Deals/Opportunities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The deal ID
 *     responses:
 *       200:
 *         description: Successfully fetched the deal
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Deal'
 *       404:
 *         description: Deal not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getDealById);

/**
 * @swagger
 * /api/deals/{id}:
 *   put:
 *     summary: Update a deal by ID
 *     tags: [Deals/Opportunities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The deal ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Deal'
 *     responses:
 *       200:
 *         description: Deal updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Deal'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Deal not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateDeal);

/**
 * @swagger
 * /api/deals/{id}:
 *   delete:
 *     summary: Delete a deal by ID
 *     tags: [Deals/Opportunities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The deal ID
 *     responses:
 *       200:
 *         description: Deal deleted successfully
 *       404:
 *         description: Deal not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteDeal);

module.exports = router;
