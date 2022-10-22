"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bookings", [
      {
        patientId: 3,
        doctorId: 5,
        bookingAt: "2022/10/22",
        startAt: "09:00",
        endAt: "10:00",
        symptoms: "fever, headache",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        patientId: 4,
        doctorId: 6,
        bookingAt: "2022/10/23",
        startAt: "09:00",
        endAt: "10:00",
        symptoms: "fever, headache",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
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
    await queryInterface.bulkDelete("bookings", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
