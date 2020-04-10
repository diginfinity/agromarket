"use strict";

const up = (queryInterface, Sequelize) => {
  const tableColumns = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING(),
      allowNull: true,
    },
    innerDiameter: {
      type: Sequelize.DECIMAL(10, 3),
      allowNull: true,
    },
    outerDiameter: {
      type: Sequelize.DECIMAL(10, 3),
      allowNull: true,
    },
    width: {
      type: Sequelize.DECIMAL(10, 3),
      allowNull: true,
    },
    image: {
      type: Sequelize.STRING(),
      allowNull: true,
    },
    link: {
      type: Sequelize.STRING(),
    },
    categoryId: {
      type: Sequelize.INTEGER(),
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
  return queryInterface.createTable("items", tableColumns);
};

const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable("items");
};

module.exports = {
  up,
  down,
};