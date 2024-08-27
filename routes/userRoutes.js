// crm/routes/userRoutes.js

const express = require('express');
const { getUserProfile } = require('../Controller/userController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get user profile
 *     tags:
 *       - User Management
 *     responses:
 *       200:
 *         description: Successfully fetched user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   example: "johndoe@example.com"
 *       401:
 *         description: Unauthorized access
 */
router.get('/profile', auth, getUserProfile);

module.exports = router;
