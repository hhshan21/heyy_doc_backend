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
      models.user.hasMany(models.booking, {
        foreignKey: "patientId",
      });
      models.user.hasMany(models.booking, {
        foreignKey: "doctorId",
      });
    }
  }
  user.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: 1,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: 2,
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
          len: 4,
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      drugAllergies: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   is: {
        //     args: /^[A-Za-z,]/i,
        //   },
        // },
      },
      isDoctor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      doctorInfo: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      doctorTime: {
        type: DataTypes.STRING,
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
