const express = require('express');
const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require('../Controller/reportController');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Report:
 *      type: object
 *      required:
 *        - title
 *        - type
 *        - data
 *        - createdBy
 *      properties:
 *        title:
 *          type: string
 *          description: The title of the report
 *          example: Monthly Sales Report
 *        type:
 *          type: string
 *          description: The type of the report
 *          enum:
 *            - Sales
 *            - Customer
 *            - Analytics
 *          example: Sales
 *        data:
 *          type: object
 *          description: The data included in the report
 *          additionalProperties: true
 *        generatedAt:
 *          type: string
 *          format: date-time
 *          description: The date when the report was generated
 *        filters:
 *          type: object
 *          description: Filters applied to generate the report
 *          additionalProperties: true
 *        createdBy:
 *          type: string
 *          description: The ID or email of the user who created the report
 *          example: user@example.com
 *      example:
 *        title: Monthly Sales Report
 *        type: Sales
 *        data:
 *          totalSales: 5000
 *          numberOfDeals: 100
 *        generatedAt: 2024-08-15T12:00:00Z
 *        filters:
 *          startDate: 2024-08-01
 *          endDate: 2024-08-31
 *        createdBy: user@example.com
 */

/**
 * @swagger
 * /api/reports:
 *   post:
 *     summary: Create a new report
 *     tags: [Reports/Dashboards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Report'
 *     responses:
 *       201:
 *         description: Report created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createReport);

/**
 * @swagger
 * /api/reports:
 *   get:
 *     summary: Get all reports
 *     tags: [Reports/Dashboards]
 *     responses:
 *       200:
 *         description: Successfully fetched all reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 *       500:
 *         description: Server error
 */
router.get('/', getReports);

/**
 * @swagger
 * /api/reports/{id}:
 *   get:
 *     summary: Get a report by ID
 *     tags: [Reports/Dashboards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The report ID
 *     responses:
 *       200:
 *         description: Successfully fetched the report
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       404:
 *         description: Report not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getReportById);

/**
 * @swagger
 * /api/reports/{id}:
 *   put:
 *     summary: Update a report by ID
 *     tags: [Reports/Dashboards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The report ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Report'
 *     responses:
 *       200:
 *         description: Report updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Report not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateReport);

/**
 * @swagger
 * /api/reports/{id}:
 *   delete:
 *     summary: Delete a report by ID
 *     tags: [Reports/Dashboards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The report ID
 *     responses:
 *       200:
 *         description: Report deleted successfully
 *       404:
 *         description: Report not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteReport);

module.exports = router;
