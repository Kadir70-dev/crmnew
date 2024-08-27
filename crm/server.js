// crm/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../db');
const swaggerSetup = require('../swagger');

// Load environment variables
dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Swagger setup
swaggerSetup(app);

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start the server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
