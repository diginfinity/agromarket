"use strict";
const express = require("express");

const app = express();
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const itemRoutes = require("./routes/items");
const emailRoutes = require("./routes/email");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(
  rateLimit({
    // 100 requests per 15 min
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/items", itemRoutes);
app.use("/email", emailRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Running client side on prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
