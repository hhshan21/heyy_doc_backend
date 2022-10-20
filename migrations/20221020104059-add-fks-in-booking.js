"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("bookings", "patientId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    });

    await queryInterface.changeColumn("bookings", "doctorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("bookings", "userId", {
      type: Sequelize.INTEGER,
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
