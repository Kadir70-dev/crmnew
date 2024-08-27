// crm/swagger.js

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'CRM API Documentation',
    version: '1.0.0',
    description: 'API documentation for the CRM system',
  },
  tags: [
    { name: 'Auth', description: 'Auth routes',},
    { name: 'User Management', description: 'User routes',},
    { name: 'Student Management', description: 'Student routes',},
    { name: 'Task Management', description: 'Task routes',},
    { name: 'Lead Management', description: 'Lead routes',},
    { name: 'Deals/Opportunities', description: 'Deals/Opportunities routes',},
    { name: 'Calendar Integration', description: 'Calendar Integration routes',},
    { name: 'default', description: 'default routes',},
    { name: 'Reports/Dashboards', description: 'Reports/Dashboards routes',},
    // { name: 'Workflows ', description: 'Workflows  routes'},

  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
  security: [{ BearerAuth: [] }],
  
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
