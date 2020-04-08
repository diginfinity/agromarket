const models = require("../models");
const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const debug = require("debug")("agromarket");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const itemSchema = Joi.object({
  title: Joi.string(),
  radius: Joi.number().precision(3),
  diameter: Joi.number().precision(3),
  b: Joi.number().precision(3),
  page: Joi.number(),
  size: Joi.number(),
});

router.get("/", validator.query(itemSchema), async (req, res) => {
  const { radius, diameter, b } = req.query;
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
  };

  if (radius) {
    findOptions.radius = radius;
  }

  if (diameter) {
    findOptions.diameter = diameter;
  }

  if (b) {
    findOptions.b = b;
  }

  const items = await models.item.findAll(findOptions);

  res.json(items);
});

module.exports = router;
