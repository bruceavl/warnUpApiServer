const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./controller/FruitsController.js'];

swaggerAutogen(outputFile, endpointsFiles);
