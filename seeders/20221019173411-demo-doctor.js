"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstName: "A",
        lastName: "Doctor",
        email: "doc@doc.com",
        password: "123",
        drugAllergies: "panadol",
        isDoctor: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        doctorInfo: JSON.stringify({
          professionalProfile: "Dr Xxxxx.",
          language: "English",
          qualification: "MBBS",
          location: "The helpful clinic. 123 helpful St #01-01",
        }),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
