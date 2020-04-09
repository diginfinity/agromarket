const models = require("../models");
const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const itemSchema = Joi.object({
  title: Joi.string(),
  innerDiameter: Joi.number().precision(3),
  outerDiameter: Joi.number().precision(3),
  width: Joi.number().precision(3),
  page: Joi.number(),
  size: Joi.number(),
});

router.get("/", validator.query(itemSchema), async (req, res) => {
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

  const items = await models.item.findAll(findOptions);

  res.json(items);
});

module.exports = router;
