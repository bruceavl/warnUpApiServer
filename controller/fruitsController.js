const express = require("express");

const router = express.Router();
// eslint-disable-next-line import/extensions
const service = require("../services/fruitService.js");

function calculatePrice(price) {
  const date = new Date();
  // Price goes up on Fridays
  if (date.getDay() === 5) {
    return price + 5;
  }

  return price;
}

// GET - return all records
router.get("/", async (req, res) => {
  const fruits = await service.getFruits();
  return res.json(fruits);
});

// GET - return a specific item
router.get("/:id", async (req, res) => {
  const f = service.getFruit(req.params.id);

  if (f === null) {
    return res.status(404).json({ message: "Fruit not found!" });
  }

  f.price = calculatePrice(f.price);

  return res.json(f);
});

// POST - add a new item
router.post("/", async (req, res) => {
  // verify inputs
  if (!req.body.name
    || !req.body.price.toString().match(/^[0-9]{1,}$/g)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  await service.addFruit(req.body.name, req.body.price);

  return res.json({ message: "New fruit created.", location: "/fruits/" });
});

// POST - update an existing item
router.post("/:id", async (req, res) => {
  if (!req.body.price.toString().match(/^[0-9]{1,}$/g)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  await service.updateFruitPrice(req.params.id, req.body.price);

  return res.json(`Fruit id ${req.params.id} has been updated.`);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await service.deleteFruit(req.params.id);

  return res.json({ message: `Fruit id ${req.params.id} has been removed.` });
});

module.exports = router;
