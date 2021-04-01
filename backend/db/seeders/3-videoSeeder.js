"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Videos", [
      {
        embedURL:
          "https://www.youtube.com/embed/5qap5aO4i9A?rel=0&modestbranding=1",
        title: "Valheim",
        about: `A brutal exploration and survival game for 1-10 players, set in a
        procedurally-generated purgatory inspired by viking culture. Battle,
        build, and conquer your way to a saga worthy of Odin’s patronage!`,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/header.jpg",
        developer: "Iron Gate AB",
        publisher: "Coffee Stain Publishing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
