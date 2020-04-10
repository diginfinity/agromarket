"use strict";
const itemsJSON = require("./items.json");

const up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert("items", itemsJSON);
};

const down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete("items", null, {});
};

module.exports = {
  up,
  down,
};
