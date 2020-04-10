const models = require("../models");
const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Joi = require("joi");
const { Category } = models;

const validator = require("express-joi-validation").createValidator();

const itemSchemaOptions = {
  title: Joi.string(),
  innerDiameter: Joi.number().precision(3),
  outerDiameter: Joi.number().precision(3),
  width: Joi.number().precision(3),
  page: Joi.number(),
  size: Joi.number(),
};

const itemSchema = Joi.object(itemSchemaOptions);

const getItems = async (req, res) => {
  const { innerDiameter, outerDiameter, width } = req.query;
  const title = req.query.title || "";
  const page = req.query.page || 1;
  const size = req.query.size || 10;

  const findOptions = {
    where: {
      title: {
        [Op.substring]: title,
      },
    },
    offset: (page - 1) * size,
    limit: size,
    include: { model: Category },
  };

  if (innerDiameter) {
    findOptions.innerDiameter = innerDiameter;
  }

  if (outerDiameter) {
    findOptions.outerDiameter = outerDiameter;
  }

  if (width) {
    findOptions.width = width;
  }

  try {
    const items = await models.Item.findAll(findOptions);
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json(error);
  }
};

router.get("/", validator.query(itemSchema), getItems);

module.exports = router;
