"use strict";

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];
    let amount = 50;

    while (amount--) {
      data.push({
        title: faker.lorem.word(),
        body: faker.lorem.paragraph()
      });
    }

    return queryInterface.bulkInsert("Posts", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
