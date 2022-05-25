const express = require("express");

const app = express();

// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(bodyParser.json());

// eslint-disable-next-line import/extensions
const fruits = require("./controller/fruitsController.js");

app.use("/fruits", fruits);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("*", (req, res) => {
  res.send("Sorry, this is an invalid URL.");
});

app.listen(3000);
