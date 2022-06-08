const express = require('express');

const app = express();

// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

app.use(bodyParser.json());

const fruits = require('./controller/fruitsController');

app.use('/fruits', fruits);

try {
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

  app.get('*', (_req, res) => {
    res.status(404).send('Sorry, this is an invalid URL.');
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(error);
}

app.listen(3000);
