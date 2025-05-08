import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Employee Management API',
    version: '1.0.0',
    description: 'A simple Express API for managing employee data',
    contact: {
      name: 'Görkem köksal',
      url: 'https://github.com/korberlin',
      email: 'gorkemm.koksal@gmail.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;