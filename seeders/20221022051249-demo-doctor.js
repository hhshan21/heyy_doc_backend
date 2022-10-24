"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstName: "C",
        lastName: "Doctor",
        email: "dc@dc.com",
        password: "123",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/006/606/754/original/cute-doctor-healthcare-and-medical-concept-cartoon-character-hand-draw-art-illustration-vector.jpg",
        isDoctor: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        doctorInfo: JSON.stringify({
          professionalProfile: "Dr C. sdfsdf",
          language: "English",
          qualification: "MBBS",
          location: "The helpful clinic. 123 helpful St #01-01",
        }),
      },
      {
        firstName: "D",
        lastName: "Doctor",
        email: "dd@dd.com",
        password: "123",
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/006/606/754/original/cute-doctor-healthcare-and-medical-concept-cartoon-character-hand-draw-art-illustration-vector.jpg",
        drugAllergies: '["penicillin", "antibiotics"]',
        isDoctor: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        doctorInfo: JSON.stringify({
          professionalProfile: "Dr D. sdfsdfsdfsd",
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
