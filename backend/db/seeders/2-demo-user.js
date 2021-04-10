"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userFunc = () => {
      let users = [];
      for (let i = 1; i <= 20; i++) {
        if (i === 1) {
          users.push({
            email: "demo@demo.com",
            username: "demoUser",
            hashedPassword: bcrypt.hashSync("password"),
            profilePictureId: Math.ceil(Math.random() * 19),
          });
        } else {
          users.push({
            email: faker.internet.email(),
            username: faker.internet.userName(),
            hashedPassword: bcrypt.hashSync("password"),
            profilePictureId: Math.ceil(Math.random() * 19),
          });
        }
      }
      return users;
    };
    let users = userFunc();
    return queryInterface.bulkInsert("Users", users);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Users", null, {});
  },
};
