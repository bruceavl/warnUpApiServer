const db = require("../models");

function getFruits() {
  return db.Fruit.findAll();
}

function getFruit(id) {
  return db.Fruit.findAll({
    where: {
      id,
    },
  });
}

async function addFruit(name, price) {
  const date = new Date();

  await db.Fruit.create({
    name,
    price,
    createdTime: date,
    updatedTime: date,
  });
}

async function updateFruitPrice(id, price) {
  const date = new Date();
  await db.Fruit.update({
    price,
    updatedTime: date,
    where: {
      id,
    },
  });
}

async function deleteFruit(id) {
  await db.Fruit.destroy({
    where: {
      id,
    },
  });
}

module.exports = {
  getFruit,
  getFruits,
  addFruit,
  updateFruitPrice,
  deleteFruit,
};
