const express = require('express');
const connectDB = require('./db');
const routes = require('./routes');

// const authenticateToken = require('./middleware/authMiddleware');
const dotenv = require('dotenv');
const swaggerSetup = require('./swagger');
const { compareSync } = require('bcryptjs');

const app = express();


// Load environment variables
dotenv.config();

// Swagger Setup
swaggerSetup(app);

// Connect Database
connectDB();

// Middleware
app.use(express.json());


// Routes q
app.use('/api', routes);
console.log('routes', routes)
console.log(firstName, lastName)




// // Protect API routes with authentication
// app.use('/api', authenticateToken, (req, res) => {
//   // Define your API routes here
//   // For example:
//   app.get('/api/some-endpoint', (req, res) => {
//     res.json({ message: 'This is a protected endpoint' });
//   });
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
