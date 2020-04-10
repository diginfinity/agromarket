"use strict";

const Category = (sequelize, DataTypes) => {
  const model = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: {
      allowNull: false,
      type: DataTypes.STRING(60),
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
  };

  const modelOptions = {
    timestamps: true,
    paranoid: true,
  };

  const Category = sequelize.define("Category", model, modelOptions);

  Category.associate = function (models) {
    const { Item } = models;

    Category.hasMany(Item);
  };

  return Category;
};
module.exports = Category;
