"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.booking.belongsTo(models.user, {
        as: "patient",
        foreignKey: "patientId",
      });
      models.booking.belongsTo(models.user, {
        as: "doctor",
        foreignKey: "doctorId",
      });
    }
  }
  booking.init(
    {
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      bookingAt: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      startAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      endAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      symptoms: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: 3,
          is: {
            args: /^[A-Za-z,]/i,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
