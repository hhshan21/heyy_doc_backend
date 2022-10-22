"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstName: "A",
        lastName: "Doctor",
        email: "doca@doca.com",
        password: "123",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/006/606/754/original/cute-doctor-healthcare-and-medical-concept-cartoon-character-hand-draw-art-illustration-vector.jpg",
        drugAllergies: "[]",
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
      {
        firstName: "B",
        lastName: "Doctor",
        email: "docb@docb.com",
        password: "123",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/006/606/754/original/cute-doctor-healthcare-and-medical-concept-cartoon-character-hand-draw-art-illustration-vector.jpg",
        drugAllergies: "[]",
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
