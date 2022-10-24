"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bookings", [
      {
        patientId: 10,
        doctorId: 12,
        bookingAt: "2022/10/24",
        startAt: "09:00",
        endAt: "10:00",
        symptoms: "fever, headache",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        patientId: 11,
        doctorId: 13,
        bookingAt: "2022/10/24",
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
