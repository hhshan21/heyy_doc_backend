"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: 1,
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: 2,
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: 4,
        },
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      drugAllergies: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: {
            args: /^[A-Za-z,]/i,
          },
        },
      },
      isDoctor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      doctorInfo: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      doctorTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
