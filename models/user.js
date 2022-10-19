"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.booking.belongsTo(models.user);
    }
  }
  user.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      drugAllergies: DataTypes.STRING,
      isDoctor: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
