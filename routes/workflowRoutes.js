const express = require('express');
const { createWorkflow, getWorkflows, updateWorkflow, deleteWorkflow } = require('../Controller/workflowController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Workflow:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the workflow.
 *           example: "New Lead Workflow"
 *         triggers:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               eventType:
 *                 type: string
 *                 enum: ['leadStatusChange', 'dealStageChange', 'taskDueDate']
 *                 description: Type of event that triggers the workflow.
 *                 example: 'leadStatusChange'
 *               conditions:
 *                 type: object
 *                 description: Conditions for triggering the workflow.
 *                 example:
 *                   status: 'Interested'
 *                   leadSource: 'Website'
 *               actions:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: ['sendEmail', 'sendSMS', 'createTask']
 *                   description: Actions to perform when the workflow is triggered.
 *                   example: 'sendEmail'
 *       required:
 *         - name
 *         - triggers
 */

/**
 * @swagger
 * /api/workflows:
 *   post:
 *     summary: Create a new workflow
 *     tags: [Workflows]
 *     description: Allows users to create a custom workflow.
 *     requestBody:
 *       description: Details of the workflow to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workflow'
 *     responses:
 *       201:
 *         description: Workflow created successfully
 *       500:
 *         description: Failed to create workflow
 */
router.post('/', createWorkflow);

/**
 * @swagger
 * /api/workflows:
 *   get:
 *     summary: Get all workflows
 *     tags: [Workflows]
 *     description: Retrieve all workflows created by the user.
 *     responses:
 *       200:
 *         description: List of workflows
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workflow'
 *       500:
 *         description: Failed to retrieve workflows
 */
router.get('/', getWorkflows);

/**
 * @swagger
 * /api/workflows/{workflowId}:
 *   put:
 *     summary: Update a workflow
 *     tags: [Workflows]
 *     description: Update an existing workflow by ID.
 *     parameters:
 *       - name: workflowId
 *         in: path
 *         required: true
 *         description: The ID of the workflow to update
 *         schema:
 *           type: string
 *           example: '605c72ef2f8fb814b2f16b42'
 *     requestBody:
 *       description: Details of the workflow to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workflow'
 *     responses:
 *       200:
 *         description: Workflow updated successfully
 *       500:
 *         description: Failed to update workflow
 */
router.put('/:workflowId', updateWorkflow);

/**
 * @swagger
 * /api/workflows/{workflowId}:
 *   delete:
 *     summary: Delete a workflow
 *     tags: [Workflows]
 *     description: Delete a workflow by ID.
 *     parameters:
 *       - name: workflowId
 *         in: path
 *         required: true
 *         description: The ID of the workflow to delete
 *         schema:
 *           type: string
 *           example: '605c72ef2f8fb814b2f16b42'
 *     responses:
 *       200:
 *         description: Workflow deleted successfully
 *       500:
 *         description: Failed to delete workflow
 */
router.delete('/:workflowId', deleteWorkflow);

module.exports = router;
