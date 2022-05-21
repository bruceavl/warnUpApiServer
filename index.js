var express = require('express');
var app = express();

var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(bodyParser.json());

var fruits = require('./services/fruitService.js');
app.use('/fruits', fruits);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('*', function (req, res) {
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);

