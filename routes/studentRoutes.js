const express = require('express');
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../Controller/studentController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - contactNumber
 *         - course
 *       properties:
 *         name:
 *           type: string
 *           description: The student's full name
 *           example: John Doe
 *         email:
 *           type: string
 *           description: The student's email address
 *           example: johndoe@example.com
 *         contactNumber:
 *           type: string
 *           description: The student's contact number
 *           example: "+1-234-567-890"
 *         course:
 *           type: string
 *           description: The course the student is enrolled in
 *           example: Mathematics
 *         address:
 *           type: string
 *           description: The student's address
 *           example: "123 Main St, Cityville"
 *         status:
 *           type: string
 *           description: The student's current status
 *           enum:
 *             - Interested
 *             - Enrolled
 *             - Dropped
 *           example: Enrolled
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the student was created
 *         communicationHistory:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: The date of communication
 *               message:
 *                 type: string
 *                 description: The communication message
 *               type:
 *                 type: string
 *                 enum:
 *                   - Call
 *                   - Email
 *                   - SMS
 *                   - Meeting
 *                 description: The type of communication
 */

/**
 * @swagger
 * /api/students/add:
 *   post:
 *     summary: Add a new student
 *     tags: [Student Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 */
router.post('/add', createStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Student Management]
 *     responses:
 *       200:
 *         description: Successfully fetched all students
 *       500:
 *         description: Server error
 */
router.get('/', getStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: contactNumberGet a student by ID
 *     tags: [Student Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student ID
 *     responses:
 *       200:
 *         description: Successfully fetched the student
 *       404:
 *         description: Student not found
 */
router.get('/:id', getStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Student Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 */
router.put('/:id', updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Student Management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
router.delete('/:id', deleteStudent);

module.exports = router;
