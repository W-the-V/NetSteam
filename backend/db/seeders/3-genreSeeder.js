"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Genres", [
      {
        type: "Survival",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Open World",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
