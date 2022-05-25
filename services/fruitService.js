// eslint-disable-next-line import/extensions
const database = require("../dataAccess/fruitDataAccess.js");
const formula = require("./fruitFormula.js");

// Get - return all fruits
async function getFruits() {
  const fruits = await database.getFruits();
  fruits.forEach((f) => {
    f.price = formula.getPrice(f.price);
  });

  return fruits;
}

// GET - return a specific item
function getFruit(id) {
  const fruit = database.getFruit(id);
  fruit.price = formula.getPrice(fruit.price);
  return fruit;
}

// POST - add a new item
async function addFruit(name, price) {
  await database.addFruit(name, price);
}

// POST - update an existing item
async function updateFruitPrice(id, price) {
  await database.updateFruitPrice(id, price);
}

// DELETE
async function deleteFruit(id) {
  await database.deleteFruit(id);
}

module.exports = {
  getFruit,
  getFruits,
  addFruit,
  updateFruitPrice,
  deleteFruit,
};
