"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "imageUrl", {
      type: Sequelize.STRING(500),
      allowNull: true,
      defaultValue:
        "https://media.istockphoto.com/vectors/sos-hand-drawn-vector-illustration-in-cartoon-comic-style-man-crying-vector-id1194700972",
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("users", "imageUrl", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
