"use strict";
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define(
    "item",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      title: {
        type: DataTypes.STRING(),
        allowNull: true,
      },

      radius: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: true,
      },

      diameter: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: true,
      },

      b: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING(),
        allowNull: true,
      },

      link: {
        type: DataTypes.STRING(),
      },

      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  item.associate = function (models) {
    // associations can be defined here
  };
  return item;
};
