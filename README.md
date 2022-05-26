# Warn up API server

This is a sample API server which can read/add/update the fruit data in sqlite database.

## Files
```
.
|-- __tests__
|   |-- fruitPrice.spec.js
|-- config
|   |-- config.json 
|-- controller
|   |-- fruitsController.js
|-- dataAccess
|   |-- fruitDataAccess.js
|-- models
|   |-- fruit.js
|   |-- index.js
|-- services
|   |-- fruitFormula.js
|   |-- fruitService.js
|-- fruits.sqlite
|-- package-lock.json
|-- package.json
|-- README.md
|-- swagger_output.json
|-- swagger.js
```

## Routes

* GET /fruits - get fruits
* GET /fruits/id - get a fruit
* POST /fruits - add a fruit
* POST /fruits/id - update a fruit
* DELETE /fruits/id - delete a fruit

## Setup Development
```
    $npm install
    $nodemon .\index.js
```

## Tests
```
    $npm test
```