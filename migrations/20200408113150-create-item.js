"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("items", {
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

      radius: {
        type: Sequelize.DECIMAL(10, 3),
        allowNull: true,
      },

      diameter: {
        type: Sequelize.DECIMAL(10, 3),
        allowNull: true,
      },

      b: {
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

      type: {
        type: Sequelize.STRING(),
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("items");
  },
};
