const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Fruit extends Model {
    static associate() {
    }
  }
  Fruit.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdTime: DataTypes.TIME,
    updatedTime: DataTypes.TIME,
  }, {
    timestamps: false,
    sequelize,
    modelName: "Fruit",
  });

  const b = async () => { await Fruit.sync(); };

  return Fruit;
};
