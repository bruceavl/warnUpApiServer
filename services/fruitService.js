var express = require('express');
var router = express.Router();
let database = require('../dataAccess/fruitDataAccess.js');

// GET - return all records
router.get('/', (req, res) => {
    return res.json(database.getFruits());
});

// GET - return a specific item
router.get('/:id', async (req, res) => {
    let f = database.getFruit(req.params.id);

    if (f === null) {
        return res.status(404).json({ message: "Fruit not found!" });
    }

    return res.json(f);
});

// POST - add a new item
router.post('/', async (req, res) => {
    // verify inputs
    if (!req.body.name
        || !req.body.price.toString().match(/^[0-9]{1,}$/g)) {
        return res.status(400).json({ message: "Bad Request" });
    }

    await database.addFruit(req.body.name, req.body.price);

    return res.json({ message: "New fruit created.", location: "/fruits/"  });
});

// POST - update an existing item
router.post('/:id', async (req, res) => {
    if (!req.body.price.toString().match(/^[0-9]{1,}$/g)) {
        return res.status(400).json({ message: "Bad Request" });
    }

    await database.updateFruitPrice(req.params.id, req.body.price);

    return res.json("Fruit id " + req.params.id + " has been updated.");
});

// DELETE
router.delete('/:id', async (req, res) => {
    await database.deleteFruit(req.params.id);

    return res.json({ message: "Fruit id " + req.params.id + " has been removed." });
});

module.exports = router;
