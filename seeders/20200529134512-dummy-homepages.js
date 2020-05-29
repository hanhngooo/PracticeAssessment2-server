"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({ where: { email: "hanhngo@gmail.com" } });

    const user2 = await User.findOne({ where: { email: "ataberk@gmail.com" } });

    const user3 = await User.findOne({ where: { email: "pikachu@gmail.com" } });
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Abandoned lives",
          description: "The story of rescueing abandoned pets",
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "I am a superman",
          description: "How I achieved things that were thought to be dreams",
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How I become a web developer",
          description: "My journey from a zero-background to a web developer",
          userId: user3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};
