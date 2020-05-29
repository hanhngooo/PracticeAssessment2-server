"use strict";
const Homepage = require("../models").homepage;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const homepage1 = await Homepage.findOne({
      where: { title: "Abandoned lives" },
    });
    const homepage2 = await Homepage.findOne({
      where: { title: "I am a superman" },
    });
    const homepage3 = await Homepage.findOne({
      where: { title: "How I become a web developer" },
    });
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "A little meow under the brigde",
          content:
            "When I was riding to work, I heard a little meow somewhere in a bush. I found a 1 month-old kitten crying for her mom. I took her home and found her an adopter.",
          imageUrl:
            "https://afbeeldingen.animalstoday.nl/2019/05/animalstoday-kitten-Pudding-Instagram-Alley-Cat-Rescue.jpg",
          homepageId: homepage1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saving Meme life",
          content:
            "5 years ago, a friend brought her to me from a park. She was so ill but still fought for her life. I brought her to the vet everyday. Finally we won against the decease.",
          imageUrl: "https://i.redd.it/qxrhkeg15te21.jpg",
          homepageId: homepage1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "I was afraid of riding scooter",
          content:
            "I took my drive at 24. After weeks of lots of fear, sweat and pratice, I finally can ride. I mom bought me a new scooter.",
          imageUrl:
            "https://media.gettyimages.com/photos/woman-riding-scooter-with-poodle-picture-id532667430?s=612x612",
          homepageId: homepage2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Why web developer?",
          content: "I was unemployed, bored and curios. ",
          imageUrl:
            "https://cdn-media-1.freecodecamp.org/images/0*ngXgBNNdx6iiWP8q.png",
          homepageId: homepage3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
