// eslint-disable-next-line import/extensions
const database = require("../dataAccess/fruitDataAccess");
const formula = require("./fruitFormula");

// Get - return all fruits
async function getFruits() {
  const fruits = await database.getFruits();
  fruits.forEach((f) => {
    f.price = formula.getPrice(f.price);
  });

  return fruits;
}

// GET - return a specific item
async function getFruit(id) {
  const fruit = await database.getFruit(id);

  if (fruit !== null) {
    fruit.price = formula.getPrice(fruit.price);
  }

  return fruit;
}

// POST - add a new item
async function addFruit(name, price) {
  const fruit = await database.addFruit(name, price);
  return fruit;
}

// POST - update an existing item
async function updateFruitPrice(id, price) {
  const number = await database.updateFruitPrice(id, price);
  return number;
}

// DELETE
async function deleteFruit(id) {
  const number = await database.deleteFruit(id);
  return number;
}

module.exports = {
  getFruit,
  getFruits,
  addFruit,
  updateFruitPrice,
  deleteFruit,
};
