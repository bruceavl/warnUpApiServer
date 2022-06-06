const Sequelize = require("sequelize");

const env = "development";
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.json`)[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const fruit = require("./fruit")(sequelize);

const db = {
  Fruit: fruit,
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
