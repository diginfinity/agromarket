const models = require("../models");
const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const debug = require("debug")("agromarket");

router.get("/", async (req, res) => {
  const title = req.query.title || "";
  const page = +req.query.page || 1;
  const size = +req.query.size || 10;
  const diameter = req.query.diameter;
  const radius = req.query.radius;
  const b = req.query.b;

  const findOptions = {
    where: {
      title: {
        [Op.substring]: title,
      },
      radius,
      diameter,
      b,
    },
    offset: (page - 1) * size,
    limit: size,
  };

  const items = await models.item.findAll(findOptions);

  res.json(items);
});

module.exports = router;
