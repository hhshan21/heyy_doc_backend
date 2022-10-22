"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstName: "A",
        lastName: "Patient",
        email: "pa@pa.com",
        password: "123",
        imageUrl:
          "https://media.istockphoto.com/vectors/cute-shiba-inu-dog-with-sunglasses-drinking-bubble-tea-cartoon-vector-vector-id1285010832?k=20&m=1285010832&s=612x612&w=0&h=Hi_uGmr8nWtx7db-FF7ZeVKDMe20vDerDZbCJ-dDWWY=",
        drugAllergies: '["panadol", "coke"]',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "B",
        lastName: "Patient",
        email: "pb@pb.com",
        password: "123",
        imageUrl:
          "https://media.istockphoto.com/vectors/cute-shiba-inu-dog-with-sunglasses-drinking-bubble-tea-cartoon-vector-vector-id1285010832?k=20&m=1285010832&s=612x612&w=0&h=Hi_uGmr8nWtx7db-FF7ZeVKDMe20vDerDZbCJ-dDWWY=",
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
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
