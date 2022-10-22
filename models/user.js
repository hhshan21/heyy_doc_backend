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
    }
  }
  user.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: 1,
          isAlpha: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: 2,
          isAlpha: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 4,
            msg: "Password must be more than 4 characters",
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      drugAllergies: {
        type: DataTypes.JSONB,
        allowNull: true,
        validate: {
          isAlpha: true,
        },
      },
      isDoctor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      doctorInfo: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
