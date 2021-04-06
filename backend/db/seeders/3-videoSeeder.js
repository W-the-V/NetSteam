"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Videos", [
      {
        embedURL:
          "https://www.youtube.com/watch?v=liQLtCLq3tc&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Valheim",
        about: `A brutal exploration and survival game for 1-10 players, set in a
        procedurally-generated purgatory inspired by viking culture. Battle,
        build, and conquer your way to a saga worthy of Odin’s patronage!`,
        genreId: 1,
        imageURL: "https://netsteambucket.s3.amazonaws.com/header.jpg",
        developer: "Iron Gate AB",
        publisher: "Coffee Stain Publishing",
        releaseDate: "Feb 2, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=ifZA6IMeLs8&ab_channel=IGN?rel=0&modestbranding=1",
        title: "No Man's Sky",
        about: `No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.`,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/nms.jpg",
        developer: "Hello Games",
        publisher: "Hello Games",
        releaseDate: "Aug 12, 2016",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=VNd7tpPzmzE&ab_channel=IGN?rel=0&modestbranding=1",
        title: "Horizon Zero Dawn",
        about: `Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG! `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/hzd.jpg",
        developer: "Guerrilla",
        publisher: "Playstation Mobile, Inc.",
        releaseDate: "Aug 7, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=ohClxMmNLQQ&ab_channel=ElectronicArts?rel=0&modestbranding=1",
        title: "It Takes Two",
        about: `Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of gleefully disruptive gameplay challenges. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/itt.jpg",
        developer: "Hazelight",
        publisher: "Electronic Arts",
        releaseDate: "Mar 25, 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=w6bE11FrSFM&ab_channel=GameSpotTrailers?rel=0&modestbranding=1",
        title: "Control Ultimate Edition",
        about: `Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat. `,
        genreId: 3,
        imageURL: "https://netsteambucket.s3.amazonaws.com/cue.jpg",
        developer: "Remedy Entertainment",
        publisher: "505 Games",
        releaseDate: "Aug 27, 2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        embedURL:
          "https://www.youtube.com/watch?v=QkkoHAzjnUs&ab_channel=RockstarGames?rel=0&modestbranding=1",
        title: "Grand Theft Auto V",
        about: `Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second. `,
        genreId: 2,
        imageURL: "https://netsteambucket.s3.amazonaws.com/gta.jpg",
        developer: "Rockstar North",
        publisher: "Rockstar Games",
        releaseDate: "Apr 14, 2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
