"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedReviews = () => {
      let reviews = [];
      const textArr = [
        "Awesome Game!",
        "My favorite Game of all time!",
        "Unbelievably Good!",
        "First!",
        "Best. Game. Ever!",
        "This is the best trailer I've ever seen!",
        "I wish more games were like this.",
        "Not that good of a game.",
        "This trailer is pretty bad, isn't it?",
        "I wish they had spent more money on making this trailer",
        "They don't make games like these anymore",
        "What an awesome game",
        "Thank you!",
        "Agreed!",
        "I don't like this game at all.",
        "This is a really bad game.",
        "This trailer should have been better.",
        "This is the best trailer of all time! Hands down!",
        "I play this game all the time!",
        "I haven't played this game in awhile!",
        "I've never tried this game before, I'm going to now!",
      ];
      for (let i = 1; i <= 20; i++) {
        for (let j = 1; j <= 10; j++) {
          let userId = i;
          let score = Math.round(Math.random());
          reviews.push({
            score,
            recommended: score === 1,
            userId,
            body: textArr[Math.floor(Math.random() * 21)],
            videoId: Math.ceil(Math.random() * 52),
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
      return reviews;
    };
    let reviews = seedReviews();
    return queryInterface.bulkInsert("Reviews", reviews);
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
