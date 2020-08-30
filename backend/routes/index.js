const express = require("express");
const app = express.Router();
const textRouter = require("./text.routes");

app.use("/text", textRouter);

module.exports = app;