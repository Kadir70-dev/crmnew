const express = require('express');
const authRoutes = require('./ authRoutes');
const userRoutes = require('./userRoutes');
const studentRoutes = require('./studentRoutes');
const leadsRoutes = require('./leadsRoutes');
const taskRoutes = require('./taskRoutes');
const dealRoutes = require('./dealRoutes');
const calendarRoutes = require('./calendarRoutes');
const reportRoutes = require('./reportRoutes');
const notificationsRoutes = require('./notificationsRoutes');
const workflowRoutes = require('./workflowRoutes');

const router = express.Router();

// Grouping all routes under /api
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/leads',leadsRoutes);
router.use('/tasks',taskRoutes);
router.use('/deals',dealRoutes);
router.use('/calendar',calendarRoutes);
router.use('/reports',reportRoutes);
router.use('/sendreminder',notificationsRoutes);
router.use('/workflows', workflowRoutes);

module.exports = router;
