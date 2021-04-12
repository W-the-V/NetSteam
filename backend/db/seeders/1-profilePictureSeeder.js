"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const getPictures = () => {
      let toReturn = [];
      for (let i = 1; i <= 14; i++) {
        toReturn.push({
          imageLink: `https://netsteambucket.s3.amazonaws.com/pp${i}.png`,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      for (let i = 16; i <= 25; i++) {
        toReturn.push({
          imageLink: `https://netsteambucket.s3.amazonaws.com/pp${i}.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      return toReturn;
    };
    const pictures = getPictures();
    return queryInterface.bulkInsert("ProfilePictures", pictures);
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
    return queryInterface.bulkDelete("ProfilePictures", null, {});
  },
};
