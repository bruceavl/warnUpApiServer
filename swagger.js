const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json'; 
const endpointsFiles = ['./fruits.js']; 

swaggerAutogen(outputFile, endpointsFiles);