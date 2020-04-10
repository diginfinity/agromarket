"use strict";

const up = (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert("categories", [
    {
      id: 1,
      name: "iglicasti",
      createdAt: Date(),
      updatedAt: Date(),
      deletedAt: null,
    },
  ]);
};

const down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete("categories", null, {});
};

module.exports = {
  up,
  down,
};
