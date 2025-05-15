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
  servers: [
    {
      url: 'http://localhost:1337',
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
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
