"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reviews", [
      {
        score: 5,
        recommended: true,
        userId: 1,
        body: "THIS IS A TEST REVIEW, 1",
        videoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        score: 5,
        recommended: true,
        userId: 1,
        body: "THIS IS A TEST REVIEW, 2",
        videoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        score: 5,
        recommended: true,
        userId: 1,
        body: "THIS IS A TEST REVIEW, 3",
        videoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        score: 5,
        recommended: true,
        userId: 1,
        body: "THIS IS A TEST REVIEW, 4",
        videoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
