const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../Controller/taskController');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      required:
 *        - title
 *        - assignedTo
 *      properties:
 *        title:
 *          type: string
 *          description: The task's title
 *          example: Follow up with client
 *        description:
 *          type: string
 *          description: The task's description
 *        assignedTo:
 *          type: string
 *          description: The person the task is assigned to
 *          example: John Doe
 *        dueDate:
 *          type: string
 *          format: date-time
 *          description: The due date of the task
 *        status:
 *          type: string
 *          description: The current status of the task
 *          enum:
 *            - Pending
 *            - In Progress
 *            - Completed
 *          example: Pending
 *        priority:
 *          type: string
 *          description: The priority level of the task
 *          enum:
 *            - Low
 *            - Medium
 *            - High
 *          example: Medium
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: The date when the task was created
 *        reminders:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              date:
 *                type: string
 *                format: date-time
 *                description: The date of the reminder
 *              message:
 *                type: string
 *                description: The reminder message
 *      example:
 *        title: Follow up with client
 *        description: Call the client to discuss the project status
 *        assignedTo: John Doe
 *        dueDate: 2024-08-30T09:00:00Z
 *        status: Pending
 *        priority: Medium
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Task Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createTask);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Task Management]
 *     responses:
 *       200:
 *         description: Successfully fetched all tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Server error
 */
router.get('/', getTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Successfully fetched the task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getTaskById);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Task Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteTask);

module.exports = router;
