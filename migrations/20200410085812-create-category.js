"use strict";

const up = (queryInterface, Sequelize) => {
  const tableColumns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    name: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(60),
    },

    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  };
  return queryInterface.createTable("categories", tableColumns);
};

const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable("categories");
};

module.exports = {
  up,
  down,
};
