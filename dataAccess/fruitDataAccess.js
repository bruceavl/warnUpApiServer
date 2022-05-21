const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './fruits.sqlite'
});

const Fruit = sequelize.define("Fruits", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    createdTime: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    updatedTime: {
        type: Sequelize.TIME,
        allowNull: false,
    }
}, {
});

const Tree = sequelize.define("Trees", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    createdTime: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    updatedTime: {
        type: Sequelize.TIME,
        allowNull: false,
    }
}, {
});

(async () => {
    await sequelize.sync();
})();

function getFruits() {
    return Fruit.findAll();
}

function getFruit(id) {
    return Fruit.findAll({
        where: {
            id: id
        }
    });
}

async function addFruit(name, price) {
    let date = new Date();

    await Fruit.create({
        name: name,
        price: price,
        createdTime: date,
        updatedTime: date
    });
}

async function updateFruitPrice(id, price) {
    let date = new Date();
    await Fruit.update({
        price: price,
        updatedTime: date,
        where: {
            id: id
        }
    });
}

async function deleteFruit(id) {
    await Fruit.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getFruit,
    getFruits,
    addFruit,
    updateFruitPrice,
    deleteFruit
};

