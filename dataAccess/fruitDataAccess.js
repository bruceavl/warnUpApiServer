const db = require('../models');

async function getFruits() {
  const fruits = await db.Fruit.findAll();
  return fruits;
}

async function getFruit(id) {
  const f = await db.Fruit.findByPk(id);
  return f;
}

async function addFruit(name, price) {
  const date = new Date();

  const fruit = await db.Fruit.create({
    name,
    price,
    createdTime: date,
    updatedTime: date,
  });

  return fruit;
}

async function updateFruitPrice(id, price) {
  const date = new Date();
  const record = await db.Fruit.update(
    {
      price,
      updatedTime: date,
    },
    {
      where: { id },
    },
  );

  return record[0];
}

async function deleteFruit(id) {
  const record = await db.Fruit.destroy({
    where: {
      id,
    },
  });

  return record;
}

module.exports = {
  getFruit,
  getFruits,
  addFruit,
  updateFruitPrice,
  deleteFruit,
};
