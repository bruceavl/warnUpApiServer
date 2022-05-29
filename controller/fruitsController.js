const express = require("express");

const router = express.Router();
// eslint-disable-next-line import/extensions
const service = require("../services/fruitService.js");
// eslint-disable-next-line import/extensions
const priceCheck = require("./fruitPriceCheck.js");

// GET - return all records
router.get("/", async (req, res) => {
  try {
    const fruits = await service.getFruits();
    return res.json(fruits);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET - return a specific item
router.get("/:id", async (req, res) => {
  if (!req.body.name
    || !priceCheck.priceCheck(req.body.price)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  try {
    const f = service.getFruit(req.params.id);

    if (f === null) {
      return res.status(404).json({ message: "Fruit not found!" });
    }

    return res.json(f);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// POST - add a new item
router.post("/", async (req, res) => {
  // verify inputs
  if (!req.body.name
    || !priceCheck.priceCheck(req.body.price)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  try {
    await service.addFruit(req.body.name, req.body.price);
    return res.json({ message: "New fruit created.", location: "/fruits/" });
  } catch (err) {
    return res.status(500).json(err);
  }
});

// POST - update an existing item
router.post("/:id", async (req, res) => {
  if (!priceCheck.priceCheck(req.body.price)) {
    return res.status(400).json({ message: "Bad Request" });
  }

  try {
    await service.updateFruitPrice(req.params.id, req.body.price);
    return res.json(`Fruit id ${req.params.id} has been updated.`);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await service.deleteFruit(req.params.id);
    return res.json({ message: `Fruit id ${req.params.id} has been removed.` });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
