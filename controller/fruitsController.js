const express = require('express');

const router = express.Router();
// eslint-disable-next-line import/extensions
const service = require('../services/fruitService');
// eslint-disable-next-line import/extensions
const priceCheck = require('./fruitPriceCheck');

// GET - return all records
router.get('/', async (req, res) => {
  try {
    const fruits = await service.getFruits();
    return res.json(fruits);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// GET - return a specific item
router.get('/:id', async (req, res) => {
  try {
    const f = await service.getFruit(req.params.id);

    if (f === null) {
      return res.status(404).json({ message: 'Fruit not found!' });
    }

    return res.json(f);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// POST - add a new item
router.post('/', async (req, res) => {
  // verify inputs
  if (!req.body.name
    || !priceCheck.checkPrice(req.body.price)) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  try {
    const fruit = await service.addFruit(req.body.name, req.body.price);
    return res.json({ message: 'New fruit created.', location: `/fruits/${fruit.id}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// POST - update an existing item
router.post('/:id', async (req, res) => {
  if (!priceCheck.checkPrice(req.body.price)) {
    return res.status(400).json({ message: 'Bad Request. The price of fruit is missing.' });
  }

  try {
    const result = await service.updateFruitPrice(req.params.id, req.body.price);

    if (result === 1) {
      return res.json(`Fruit id ${req.params.id} has been updated.`);
    }

    return res.status(404).json({ message: 'Fruit not found!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const result = await service.deleteFruit(req.params.id);

    if (result === 1) {
      return res.json({ message: `Fruit id ${req.params.id} has been removed.` });
    }

    return res.status(404).json({ message: 'Fruit not found!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
